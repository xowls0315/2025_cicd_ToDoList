import Joi from "joi";

const subtaskSchema = Joi.object({
  id: Joi.number().integer().positive().optional(), // 프론트에서는 없어도 됨
  title: Joi.string().trim().min(1).max(200).required(),
  completed: Joi.boolean().default(false),
});

export const createTodoSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200).required(),
  description: Joi.string().allow("", null).max(1000),
  date: Joi.string().isoDate().required(),
  completed: Joi.boolean().default(false),
  subtasks: Joi.array().items(subtaskSchema).default([]),
});

export const updateTodoSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200),
  description: Joi.string().allow("", null).max(1000),
  date: Joi.string().isoDate(),
  completed: Joi.boolean(),
  subtasks: Joi.array().items(subtaskSchema),
}).min(1);


