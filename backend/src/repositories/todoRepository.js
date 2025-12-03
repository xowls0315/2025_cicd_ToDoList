import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAllTodos() {
  return prisma.todos.findMany({
    orderBy: { date: "asc" },
    include: { subtasks: true },
  });
}

export async function createTodo(data) {
  const { title, description, date, completed, subtasks } = data;
  return prisma.todos.create({
    data: {
      title,
      description,
      date: new Date(date),
      completed: completed ?? false,
      subtasks: {
        create:
          subtasks?.map((s) => ({
            title: s.title,
            completed: !!s.completed,
          })) ?? [],
      },
    },
    include: { subtasks: true },
  });
}

export async function updateTodo(id, data) {
  const { title, description, date, completed, subtasks } = data;

  return prisma.todos.update({
    where: { id },
    data: {
      title,
      description,
      date: date ? new Date(date) : undefined,
      completed,
      ...(Array.isArray(subtasks)
        ? {
            subtasks: {
              deleteMany: { todo_id: id },
              create: subtasks.map((s) => ({
                title: s.title,
                completed: !!s.completed,
              })),
            },
          }
        : {}),
    },
    include: { subtasks: true },
  });
}

export async function deleteTodo(id) {
  await prisma.subtasks.deleteMany({ where: { todo_id: id } });
  return prisma.todos.delete({ where: { id } });
}
