import { findAllTodos, createTodo, updateTodo, deleteTodo } from "../repositories/todoRepository.js";

export async function getTodos(req, res, next) {
  try {
    const todos = await findAllTodos();
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

export async function createTodoHandler(req, res, next) {
  try {
    const todo = await createTodo(req.validatedBody);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}

export async function updateTodoHandler(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "id는 숫자여야 합니다." });
    }
    const todo = await updateTodo(id, req.validatedBody);
    res.json(todo);
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "존재하지 않는 Todo입니다." });
    }
    next(err);
  }
}

export async function deleteTodoHandler(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "id는 숫자여야 합니다." });
    }
    await deleteTodo(id);
    return res.status(200).json({
      message: `${id}번 todo 항목이 삭제되었습니다.`,
    });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "존재하지 않는 Todo입니다." });
    }
    next(err);
  }
}
