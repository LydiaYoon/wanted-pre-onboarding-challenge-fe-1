# Wanted ::: 프리온보딩 프론트엔드 챌린지 (8월)

🔗 [챌린지 페이지 링크](https://www.wanted.co.kr/events/pre_challenge_fe_1?utm_source=email&utm_medium=braze_career&utm_campaign=career_pre_challenge_fe_1)

<br/>

## 0. 목차

[1. 최종 구현 화면](#1-최종-구현-화면)  
- [회원가입](#회원가입)  
- [로그인](#로그인)  
- [투두리스트](#투두리스트)  

[2. 실행 방법](#2-실행-방법)  
[3. 클라이언트 구현 과제](#3-클라이언트-구현-과제)  
[4. 사용한 프레임워크 및 라이브러리](#4-사용한-프레임워크-및-라이브러리)  
[5. 폴더 구조 설명](#5-폴더-구조-설명)  
[6. 과제 진행 시 주안점 작성](#6-과제-진행-시-주안점-작성)  
[7. 한계점 및 개선 사항 작성](#7-한계점-및-개선-사항-작성)  

<br/><br/>

## 1. 최종 구현 화면

#### 회원가입
- http://localhost:3000/auth/signup  

<img src=".\img\auth_signup.gif" alt="signup" height="480" /><br/>

#### 로그인
- http://localhost:3000/auth/signin  

<img src=".\img\auth_signin.gif" alt="signin" height="480" /><br/>

#### 투두리스트
- http://localhost:3000/todos  

<img src=".\img\todo_read.gif" alt="todo_read" height="480" /><br/>
<img src=".\img\todo_create.gif" alt="todo_create" height="480" /><br/>
<img src=".\img\todo_update.gif" alt="todo_update" height="480" /><br/>
<img src=".\img\todo_delete.gif" alt="todo_delete" height="480" /><br/>

<br/><br/>

## 2. 실행 방법

### 2-1) [Back-end API](./server/README.md) 실행

```bash
server $ yarn  
server $ yarn start # http://localhost:8080  
```

### 2-2) Client 실행
```bash
client $ yarn
client $ yarn start # http://localhost:3000
```

<br/><br/>

## 3. 클라이언트 구현 과제
- [요구사항 체크리스트](./Requirements.md)

<br/><br/>

## 4. 사용한 프레임워크 및 라이브러리
- [package.json](./client/package.json) 참조

||description|
|---|---|
| <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> | 자바스크립트에 **정적 타입**을 추가한 프로그래밍 언어<br/>생각보다 예상하지 못한 타입이 떨어지는 경우가 많았다.<br/>(`undefined` 와 `null` 파티 😵‍💫) |
| <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> | 컴포넌트 기반의 화면 구성 |
| <img src="https://img.shields.io/badge/Create React App-09D3AC?style=for-the-badge&logo=CreateReactApp&logoColor=black"/> | CRA로 빠르게 프로젝트 생성 |
| <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=black"/> | 라우팅을 위해 사용 |
| <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=black"/> | 회원가입/로그인, 할 일 작성 등 Form을 위해 사용<br/>input 값의 validation을 쉽게 할 수 있었다. |
| <img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge"/> | **HTTP 비동기 통신** |
| <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> | **상태 관리 라이브러리**<br/>클라이언트 사태 관리에 사용 (레이아웃, 모달 등) |
| <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/> | **상태 관리 라이브러리**<br/>서버 데이터 비동기 호출 관리 및 캐싱에 사용 |
| <img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> |  **컴포넌트 스타일 지정을 위한 라이브러리**<br/>이전에 css파일로만 관리해봤어서 이번에 사용해봄.<br/>스타일에 props를 내려줄 수도 있고, 컴포넌트에 스타일을 지정해줘서 css가 중첩되지 않아서 좋았다. |
| <img src="https://img.shields.io/badge/Day.js-FB6052?style=for-the-badge"/> |  **JavaScript용 날짜,시간 라이브러리**<br/>무려  2kb로 가볍고, Moment.js 지원 중단으로 인해 선택함 |


<br/><br/>

## 5. 폴더 구조 설명
```bash
# client
. 
├── public
├── src
│   ├── App.tsx
│   ├── Router.tsx
│   ├── index.tsx
│   ├── api # Axios client
│   │   ├── auth
│   │   └── todo
│   ├── components # 공통으로 사용되는 컴포넌트
│   │   ├── FloatingButton
│   │   ├── Header
│   │   └── Modal
│   ├── enums # 상수
│   ├── modules # Redux Reducer
│   ├── pages
│   │   ├── Auth
│   │   │   ├── Signin
│   │   │   ├── Signup
│   │   │   └── hooks # Custom Hook
│   │   └── Todos
│   │       ├── TodoCreate
│   │       ├── TodoDetail
│   │       ├── TodoItem
│   │       ├── TodoList
│   │       └── hooks # Custom Hook
│   ├── reactQuery # React-Query client, cache key
│   ├── routes
│   ├── styles
│   └── utils # 공통으로 사용되는 함수
├── package.json
├── tsconfig.json
└── yarn.lock
```

원래는 커스텀 훅을 담는 hooks 디렉터리를 pages와 같은 레벨에 만들어서 그안에서 feature를 나누어서 작업했었다.  
하지만 이번에는 관련있는 코드들을 가까이 위치시키는 [Co-Location](https://tkdodo.eu/blog/effective-react-query-keys#colocate)의 관점에서 각 feature 디렉터리 내에 hooks를 두었다.  
간략히 예를 들자면 아래와 같다.

before)
```bash
│   ├── pages
│   │   ├── Auth
│   │   │   ├── AuthView1
│   │   │   └── AuthView2
│   │   └── Todos
│   │       ├── TodoView1
│   │       └── TodoView2
│   ├── hooks # Custom Hook
│   │   ├── Auth
│   │   │   ├── AuthHook1
│   │   │   └── AuthHook2
│   │   └── Todos
│   │       ├── TodoHook1
│   │       └── TodoHook2
```

after)
```bash
│   ├── pages
│   │   ├── Auth
│   │   │   ├── AuthView1
│   │   │   ├── AuthView2
│   │   │   └── hooks # Custom Hook
│   │   │       ├── AuthHook1
│   │   │       └── AuthHook2
│   │   └── Todos
│   │       ├── TodoView1
│   │       ├── TodoView2
│   │       └── hooks # Custom Hook
│   │           ├── TodoHook1
│   │           └── TodoHook2
```
정말 한 끗 차이인 것 같지만, 관련된 hook들이 구조상 가까운 곳에 있으니 작업이 편리했다.  
그래서 Redux 파일들도 <u>기능 중심</u>으로 파일을 나누는 [Ducks Pattern🐤](https://github.com/erikras/ducks-modular-redux)으로 수정해버렸다.

<details>
<summary>접기/펼치기</summary>

<!-- summary 아래 한칸 공백 두어야함 -->
>### Ducks Pattern 규칙
>1. reducer는 export default로 내보낸다.  
>2. action 함수는 export로 내보낸다.  
>3. 액션타입을 정의할 때 <u>reducer/ACTION_TYPE</u> 형태로 적어줘야 한다.  
>이렇게 접두사를 붙여주는 이유는 서로다른 리듀서에서 액션이름이 중첩되는것을 방지하기위해서이다.
</details>

만약에 이 프로젝트의 규모가 크고, `Redux-saga`를 썼다면 심지어 `TypeScript`도 적용했다면..??  
Ducks Pattern을 적용했을 경우 하나의 리듀서 파일이 너무 길어져서 안썼을것이다.  
(이전에 feature별로 type/action/saga/reducer를 일일이 발라낸 기억이 난다..)  
하지만 소규모 프로젝트라 관리할 상태값도 많지 않고, 비동기 통신도 `React-Query`를 사용해서 하나로 합친게 오히려 좋았다. 👍

결론적으로 필요에 따라 적당히 나누고, 적당히 모아줘야 한다는걸 깨달았다.

<br/><br/>

## 6. 과제 진행 시 주안점 작성
이번 과제는 `왜(Why)` 를 생각하면서 수행했다.  

- 구조를 *왜* 이렇게 설계했는가?  
- 이 라이브러리를 *왜* 선택했는가?  

재직상태였을 때에는 일정에 치여 서비스를 주먹구구식으로 작업했다.  
당연히 구조도, 라이브러리도 기존에 있던 프로젝트를 참고해서 무작정 따라 만들었다..  
좋은 코드나 설계, 이 라이브러리를 왜 선택했는지 등에 대한 스스로의 생각이 많이 부족했던 것 같다.



<br/><br/>

## 7. 한계점 및 개선 사항 작성
- 구조에 집착하느라 오히려 feature 구현하는게 늦어졌다.
- `Redux`를 아예 걷어내고 `React-Query`로 수정해야겠다.
- 같이 활동한 다른 분들을 보니 `Recoil`을 사용하신 분들도 몇 계셨다.  
백문이 불여일견. 써봐야지.
- 개인 블로그에 TIL 위주의 포스트를 주로 작성했는데, 문제 해결 과정을 기록하는게 더 중요하다는걸 깨달았다.  
조금씩 더 고쳐보면서 과정을 기록해야겠다.

<br/><br/>
