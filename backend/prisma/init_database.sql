-- PostgreSQL 데이터베이스 초기화 SQL 스크립트
-- DBeaver에서 실행하거나 psql에서 실행할 수 있습니다.

-- 1. 데이터베이스 생성 (필요한 경우)
-- 주의: DBeaver에서 이미 데이터베이스를 생성했다면 이 부분은 건너뛰세요
-- CREATE DATABASE todolist_db;

-- 2. 데이터베이스 연결 (psql을 사용하는 경우)
-- \c todolist_db;

-- 3. 기존 테이블 삭제 (이미 존재하는 경우)
DROP TABLE IF EXISTS "subtasks" CASCADE;
DROP TABLE IF EXISTS "todos" CASCADE;
DROP TABLE IF EXISTS "dogs" CASCADE;

-- 4. Prisma가 사용하는 _prisma_migrations 테이블 삭제 (있는 경우)
DROP TABLE IF EXISTS "_prisma_migrations" CASCADE;

-- 5. todos 테이블 생성
CREATE TABLE "todos" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(6) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 6. subtasks 테이블 생성
CREATE TABLE "subtasks" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(200) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "todo_id" INTEGER NOT NULL,
    CONSTRAINT "subtasks_todo_id_fkey" FOREIGN KEY ("todo_id") 
        REFERENCES "todos"("id") 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION
);


-- 8. 인덱스 생성 (성능 향상을 위해)
CREATE INDEX IF NOT EXISTS "idx_subtasks_todo_id" ON "subtasks"("todo_id");
CREATE INDEX IF NOT EXISTS "idx_todos_completed" ON "todos"("completed");
CREATE INDEX IF NOT EXISTS "idx_todos_date" ON "todos"("date");

-- 9. updated_at 자동 업데이트를 위한 트리거 함수 생성
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 10. todos 테이블의 updated_at 자동 업데이트 트리거 생성
CREATE TRIGGER update_todos_updated_at 
    BEFORE UPDATE ON "todos"
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 완료 메시지
SELECT '데이터베이스 초기화가 완료되었습니다!' AS message;

