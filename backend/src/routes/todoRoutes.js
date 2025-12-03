import { Router } from "express";
import {
  getTodos,
  createTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
} from "../controllers/todoController.js";
import { validate } from "../middlewares/validate.js";
import { createTodoSchema, updateTodoSchema } from "../schemas/todoSchema.js";

const router = Router();

// GET: todos 리스트 조회
router.get("/", getTodos);

// POST: todos 등록
router.post("/", validate(createTodoSchema), createTodoHandler);

// UPDATE: todos 수정
router.put("/:id", validate(updateTodoSchema), updateTodoHandler);

// DELETE: todos 삭제
router.delete("/:id", deleteTodoHandler);

export default router;


