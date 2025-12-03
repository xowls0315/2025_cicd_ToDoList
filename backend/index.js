import express from "express";
import cors from "cors";
import todoRoutes from "./src/routes/todoRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*", // 필요 시 프론트엔드 도메인으로 제한
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// 0. index
app.get("/", (req, res) => {
  res.json({ message: "안녕하세요 To-Do List 서버 입니다." });
});

// 1. todos [crud]
app.use("/todos", todoRoutes);

// 공통 에러 핸들러
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ message: "서버 내부 오류가 발생했습니다." });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`To-Do List 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
