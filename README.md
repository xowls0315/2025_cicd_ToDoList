# 📝 ToDoList 프로젝트

**한 줄 요약**: Next.js와 Express를 활용한 현대적인 Todo 관리 웹 애플리케이션

**프로젝트 URL**: (배포 URL을 여기에 추가하세요)

---

## 01. 프로젝트 소개

### 프로젝트의 목적 및 개요

ToDoList는 일상적인 업무와 일정을 효율적으로 관리할 수 있도록 도와주는 풀스택 웹 애플리케이션입니다. 직관적인 UI와 강력한 기능을 제공하여 사용자가 할 일을 체계적으로 관리하고 생산성을 높일 수 있도록 설계되었습니다.

### 해결하고자 하는 문제

- **일정 관리의 어려움**: 여러 날짜에 걸친 Todo를 한눈에 파악하기 어려운 문제
- **작업 우선순위 관리**: 중요한 작업과 세부 작업을 구분하여 관리하는 어려움
- **진행 상황 추적**: 전체 작업의 완료율과 진행 상황을 시각적으로 확인하기 어려운 문제
- **사용자 경험**: 직관적이고 반응형인 인터페이스의 필요성

### 주요 특징 및 장점

- ✅ **직관적인 UI/UX**: 모던하고 깔끔한 디자인으로 사용자 친화적인 인터페이스 제공
- 🎨 **다크 모드 지원**: 눈의 피로를 줄이는 다크 테마 기능
- 📅 **주간 뷰**: 한 주 단위로 일정을 한눈에 확인할 수 있는 캘린더 뷰
- 📊 **진행률 대시보드**: 전체 Todo의 완료율과 통계를 시각적으로 표시
- 🔄 **드래그 앤 드롭**: 직관적인 드래그 앤 드롭으로 Todo 순서 조정
- 📋 **서브태스크 관리**: 각 Todo에 세부 작업을 추가하여 더 세밀한 관리 가능
- ⚡ **Optimistic UI**: 즉각적인 UI 반응으로 사용자 경험 향상
- 🎯 **날짜별 필터링**: 특정 날짜의 Todo만 필터링하여 집중 관리

---

## 02. 프로젝트 주요 기능

### 핵심 기능 설명

#### 1. Todo CRUD 기능
- **생성**: 제목, 설명, 날짜, 서브태스크를 포함한 Todo 생성
- **조회**: 전체 Todo 목록 조회 및 날짜별 필터링
- **수정**: Todo 정보 수정 및 서브태스크 관리
- **삭제**: Todo 삭제 (연관된 서브태스크 자동 삭제)

#### 2. 서브태스크 관리
- 각 Todo에 여러 개의 서브태스크 추가 가능
- 서브태스크별 완료 상태 개별 관리
- 서브태스크 추가/삭제 기능

#### 3. 드래그 앤 드롭 정렬
- `@dnd-kit` 라이브러리를 활용한 직관적인 순서 변경
- 드래그 앤 드롭으로 Todo의 우선순위 조정

#### 4. 주간 뷰 (Weekly View)
- 현재 주의 7일간 일정을 한눈에 확인
- 각 날짜별 Todo 개수 표시
- 날짜 클릭으로 해당 날짜의 Todo 필터링
- 이전/다음 주 이동 기능

#### 5. 진행률 대시보드 (Progress Snapshot)
- 전체 Todo 완료율 시각화
- 전체 Todo 개수 및 완료된 Todo 개수 표시
- 진행률 바를 통한 직관적인 진행 상황 확인

#### 6. 다크 모드
- 라이트/다크 테마 전환 기능
- 사용자 선호도에 따른 테마 선택

#### 7. 실시간 시계
- 헤더에 현재 시간 표시
- 1초 단위로 업데이트

### 스크린샷

> 💡 **참고**: 실제 스크린샷이나 GIF를 추가하여 프로젝트를 더 직관적으로 소개할 수 있습니다.

---

## 03. 프로젝트 기술 스택

### 프론트엔드

- **프레임워크**: Next.js 16.0.6 (App Router)
- **언어**: TypeScript 5
- **UI 라이브러리**: React 19.2.0
- **스타일링**: Tailwind CSS 4
- **상태 관리**: React Hooks (useState, useEffect)
- **드래그 앤 드롭**: @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities
- **날짜 처리**: dayjs 1.11.10

### 백엔드

- **런타임**: Node.js
- **프레임워크**: Express 5.2.1
- **언어**: JavaScript (ES Modules)
- **데이터베이스 ORM**: Prisma 6.19.0
- **데이터 검증**: Joi 18.0.2
- **CORS**: cors 2.8.5

### 데이터베이스

- **데이터베이스**: PostgreSQL
- **ORM**: Prisma Client

### 개발 도구

- **린터**: ESLint
- **패키지 관리**: npm
- **개발 서버**: nodemon (백엔드)

---

## 04. 프로젝트 설치 방법

### 사전 요구사항

- Node.js (v18 이상 권장)
- npm 또는 yarn
- PostgreSQL 데이터베이스

### 1. 저장소 클론

```bash
git clone <repository-url>
cd ToDoList
```

### 2. 백엔드 설정

```bash
# 백엔드 디렉토리로 이동
cd backend

# 의존성 설치
npm install

# 환경 변수 설정
# .env 파일을 생성하고 다음 내용을 추가하세요:
# DATABASE_URL="postgresql://사용자명:비밀번호@localhost:5432/데이터베이스명"

# Prisma 마이그레이션 실행
npx prisma migrate dev

# Prisma Client 생성
npx prisma generate

# 개발 서버 실행 (포트 3000)
npm start
```

### 3. 프론트엔드 설정

```bash
# 새 터미널에서 프론트엔드 디렉토리로 이동
cd frontend

# 의존성 설치
npm install

# 환경 변수 설정 (선택사항)
# .env.local 파일을 생성하고 다음 내용을 추가하세요:
# NEXT_PUBLIC_API_URL=http://localhost:3000

# 개발 서버 실행 (포트 3001, Next.js 기본값)
npm run dev
```

### 4. 애플리케이션 접속

- 프론트엔드: http://localhost:3000 (또는 Next.js가 할당한 포트)
- 백엔드 API: http://localhost:3000 (또는 설정한 포트)

### 빌드 및 배포

#### 프론트엔드 빌드

```bash
cd frontend
npm run build
npm start
```

#### 백엔드 프로덕션 실행

```bash
cd backend
npm start
```

---

## 05. 기타

### 프로젝트 구조

```
ToDoList/
├── frontend/                 # Next.js 프론트엔드
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   └── page.tsx         # 메인 페이지
│   ├── src/
│   │   ├── components/       # 공통 컴포넌트
│   │   │   └── Card.tsx
│   │   ├── features/         # 기능별 모듈
│   │   │   ├── dashboard/   # 대시보드 기능
│   │   │   │   ├── ProgressSnapshot.tsx
│   │   │   │   └── WeeklyView.tsx
│   │   │   ├── layout/      # 레이아웃 컴포넌트
│   │   │   │   └── Header.tsx
│   │   │   ├── theme/       # 테마 관리
│   │   │   │   └── useTheme.tsx
│   │   │   └── todo/        # Todo 기능
│   │   │       ├── SortableTodo.tsx
│   │   │       ├── TodoForm.tsx
│   │   │       ├── TodoList.tsx
│   │   │       ├── types.ts
│   │   │       └── useTodos.ts
│   │   └── util/            # 유틸리티 함수
│   │       └── todoHelpers.ts
│   ├── package.json
│   └── tailwind.config.ts
│
└── backend/                  # Express 백엔드
    ├── src/
    │   ├── controllers/     # 컨트롤러 (비즈니스 로직)
    │   │   └── todoController.js
    │   ├── middlewares/      # 미들웨어
    │   │   └── validate.js
    │   ├── repositories/    # 데이터 접근 계층
    │   │   └── todoRepository.js
    │   ├── routes/          # 라우트 정의
    │   │   └── todoRoutes.js
    │   └── schemas/         # 데이터 검증 스키마
    │       └── todoSchema.js
    ├── prisma/
    │   └── schema.prisma    # Prisma 스키마
    ├── index.js             # 서버 진입점
    └── package.json
```

### ERD (Entity Relationship Diagram)

```
┌─────────────┐
│    todos    │
├─────────────┤
│ id (PK)     │
│ title       │
│ description │
│ date        │
│ completed   │
│ created_at  │
│ updated_at  │
└──────┬──────┘
       │
       │ 1:N
       │
       ▼
┌─────────────┐
│  subtasks   │
├─────────────┤
│ id (PK)     │
│ title       │
│ completed   │
│ todo_id (FK)│
└─────────────┘
```

**관계 설명**:
- `todos` 테이블과 `subtasks` 테이블은 1:N 관계
- 하나의 Todo는 여러 개의 서브태스크를 가질 수 있음
- `subtasks.todo_id`가 `todos.id`를 참조
- Todo 삭제 시 연관된 서브태스크는 CASCADE로 자동 삭제

### 프로젝트 과정 중 발생한 트러블 슈팅

#### 1. Optimistic UI 구현 시 동기화 문제

**문제**: Todo 생성/수정 시 서버 응답 전에 UI를 업데이트하다 보니, 서버 오류 발생 시 상태 롤백이 제대로 되지 않는 문제

**해결**: 
- 임시 ID를 생성하여 Optimistic Update 수행
- 서버 응답 후 실제 ID로 교체
- 에러 발생 시 스냅샷을 저장하여 롤백 처리

```typescript
// useTodos.ts에서 구현
const tempId = createId();
const optimisticTodo: Todo = { ... };
setTodos((prev) => [optimisticTodo, ...prev]);
// 서버 응답 후 실제 데이터로 교체
```

#### 2. 드래그 앤 드롭과 서버 동기화

**문제**: 드래그 앤 드롭으로 순서를 변경했지만, 서버에 반영되지 않는 문제

**해결**: 
- 프론트엔드에서만 순서 변경 처리 (로컬 상태 관리)
- 필요 시 서버에 순서 정보를 저장하는 필드 추가 고려

#### 3. 날짜 필터링과 주간 뷰 동기화

**문제**: 주간 뷰에서 날짜를 선택했을 때 TodoList가 제대로 필터링되지 않는 문제

**해결**: 
- `selectedDate` 상태를 메인 컴포넌트에서 관리
- `useMemo`를 활용하여 필터링된 Todo 목록 계산
- 주간 뷰와 TodoList 간 상태 공유

#### 4. Prisma 스키마와 API 응답 형식 불일치

**문제**: Prisma에서 반환하는 날짜 형식(DateTime)과 프론트엔드에서 사용하는 형식(YYYY-MM-DD)이 달라 변환 필요

**해결**: 
- `mapApiTodo` 함수를 통해 API 응답을 프론트엔드 형식으로 변환
- `dayjs`를 활용하여 날짜 포맷팅 통일

#### 5. CORS 설정 문제

**문제**: 프론트엔드와 백엔드가 다른 포트에서 실행되면서 CORS 에러 발생

**해결**: 
- Express에 `cors` 미들웨어 추가
- 개발 환경에서는 모든 origin 허용 (`origin: "*"`)
- 프로덕션 환경에서는 특정 도메인만 허용하도록 설정 권장

### 프로젝트 후기

이 프로젝트를 통해 다음과 같은 경험과 학습을 얻었습니다:

1. **풀스택 개발 경험**: 프론트엔드와 백엔드를 모두 구현하며 전체적인 웹 애플리케이션 개발 흐름을 이해할 수 있었습니다.

2. **현대적인 기술 스택 활용**: Next.js App Router, TypeScript, Prisma 등 최신 기술 스택을 실제 프로젝트에 적용해보며 그 장점을 체험했습니다.

3. **사용자 경험 개선**: Optimistic UI, 드래그 앤 드롭, 다크 모드 등 사용자 경험을 향상시키는 기능들을 구현하며 UX에 대한 이해가 깊어졌습니다.

4. **코드 구조화**: Controller, Repository, Middleware 등으로 코드를 분리하여 유지보수성과 확장성을 고려한 아키텍처를 설계했습니다.

5. **에러 처리와 상태 관리**: 서버 오류 시 적절한 롤백 처리와 사용자 피드백을 제공하는 방법을 학습했습니다.

앞으로 더 개선하고 싶은 부분:
- 사용자 인증 및 다중 사용자 지원
- Todo 카테고리 및 태그 기능
- 검색 및 정렬 기능 강화
- 알림 및 리마인더 기능
- 모바일 반응형 디자인 개선

---

## 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.

---

## 연락처

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 등록해주세요.

