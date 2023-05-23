## 개요
### Infomation
간단한 서버 구동을 통해서 REST_API 구동

## 시작가이드
### Requirements
For builng and running the application you need:
 - Node.js 16.10.0

## Stacks🕹
### Environment
<img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>

### Development
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/> 


### Communication
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>

## 아키텍쳐
### 디렉토리 구조

```
BUILDING_REST_API
├─ nodemon.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ controllers : 컨트롤러
│  │  ├─ authentication.ts : 로그인, 회원가입
│  │  └─ users.ts : 유저 정보
│  ├─ db : 데이터베이스 정의
│  │  └─ users.ts : 유저 스키마
│  ├─ helpers : 유틸리티
│  │  └─ index.ts : 암호화
│  ├─ index.ts : 서버정보
│  ├─ middlewares 
│  │  └─ index.ts : 컨트롤러 처리전 확인
│  └─ router : 라우터 (url 분리)
│     ├─ authentication.ts : 로그인, 회원가입 라우터
│     ├─ index.ts
│     └─ users.ts : 유저 정보
└─ tsconfig.json 
```