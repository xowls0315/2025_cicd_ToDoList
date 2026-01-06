# PostgreSQL 데이터베이스 설정 가이드

## 방법 1: SQL 스크립트 사용 (직접 실행)

### 1단계: DBeaver에서 데이터베이스 생성

1. DBeaver를 실행하고 PostgreSQL 연결을 생성합니다.
2. 새 데이터베이스를 생성합니다:
   ```sql
   CREATE DATABASE todolist_db;
   ```
   또는 DBeaver UI에서 우클릭 → "Create Database"를 선택합니다.

### 2단계: SQL 스크립트 실행

1. DBeaver에서 생성한 데이터베이스에 연결합니다.
2. `prisma/init_database.sql` 파일을 열거나 내용을 복사합니다.
3. DBeaver의 SQL 편집기에서 전체 스크립트를 실행합니다.
   - SQL 편집기 열기: `Alt + Shift + X` 또는 상단 메뉴에서 "SQL Editor" 선택
   - 스크립트 붙여넣기 후 실행: `Ctrl + Enter` 또는 실행 버튼 클릭

### 3단계: 환경 변수 설정

백엔드 루트 디렉토리에 `.env` 파일을 생성하고 다음 내용을 추가합니다:

```env
DATABASE_URL="postgresql://사용자명:비밀번호@호스트:포트/데이터베이스명"
```

**예시:**
```env
# 로컬 PostgreSQL인 경우
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/todolist_db"

# DBeaver에서 생성한 원격 데이터베이스인 경우
DATABASE_URL="postgresql://username:password@your_host:5432/todolist_db"
```

### 4단계: Prisma Client 생성

터미널에서 다음 명령어를 실행합니다:

```bash
cd backend
npx prisma generate
```

---

## 방법 2: Prisma Migrate 사용 (권장)

Prisma를 사용하는 경우, Prisma Migrate를 사용하는 것이 더 안전하고 관리하기 쉽습니다.

### 1단계: 데이터베이스 생성

DBeaver에서 데이터베이스를 생성합니다:
```sql
CREATE DATABASE todolist_db;
```

### 2단계: 환경 변수 설정

`.env` 파일을 생성하고 `DATABASE_URL`을 설정합니다 (위의 방법 1의 3단계 참조).

### 3단계: Prisma Migrate 실행

```bash
cd backend
npx prisma migrate dev --name init
```

이 명령어는:
- `schema.prisma` 파일을 기반으로 데이터베이스에 테이블을 생성합니다.
- 마이그레이션 파일을 생성합니다.
- Prisma Client를 자동으로 생성합니다.

### 4단계: (선택) Prisma Studio로 확인

데이터베이스가 제대로 생성되었는지 확인하려면:

```bash
npx prisma studio
```

브라우저에서 `http://localhost:5555`가 열리며 데이터베이스 내용을 확인할 수 있습니다.

---

## 문제 해결

### 연결 오류가 발생하는 경우

1. **호스트/포트 확인**: PostgreSQL이 실행 중인지 확인하세요.
2. **인증 정보 확인**: 사용자명과 비밀번호가 올바른지 확인하세요.
3. **방화벽 설정**: 원격 데이터베이스인 경우 포트가 열려있는지 확인하세요.

### 테이블이 이미 존재하는 경우

SQL 스크립트는 기존 테이블을 삭제하고 다시 생성합니다. 데이터를 보존하려면:
- 방법 2 (Prisma Migrate)를 사용하거나
- SQL 스크립트에서 `DROP TABLE` 부분을 제거하세요.

### Prisma Client 오류

다음 명령어로 Prisma Client를 재생성하세요:
```bash
npx prisma generate
```

---

## 데이터베이스 구조

생성되는 테이블:
- **todos**: 할 일 목록 (id, title, description, date, completed, created_at, updated_at)
- **subtasks**: 하위 작업 목록 (id, title, completed, todo_id)
- **dogs**: 개 정보 (id, name, breed, age)

관계:
- `subtasks.todo_id` → `todos.id` (CASCADE 삭제)

