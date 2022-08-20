# Wanted ::: 프리온보딩 프론트엔드 챌린지 (8월)

🔗 [챌린지 페이지 링크](https://www.wanted.co.kr/events/pre_challenge_fe_1?utm_source=email&utm_medium=braze_career&utm_campaign=career_pre_challenge_fe_1)

## 목차

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

## 4. 사용한 프레임워크 및 라이브러리
- [package.json](./client/package.json) 참조하여 선택한 이유

## 5. 폴더 구조 설명
- 폴더를 구분한 기준에 대하여 설명
- tree 명령어를 사용하면 간편하게 디렉토리 구조를 출력할 수 있음

## 6. 과제 진행 시 주안점 작성
- 고민한 부분에 대하여 서술

## 7. 한계점 및 개선 사항 작성
- 고려는 하였으나 실제 구현하지 못한 부분에 대하여 서술
