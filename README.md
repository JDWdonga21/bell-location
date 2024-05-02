# 제로웹_Bell_장소시니어매칭기

## 프로젝드 시작하기

### node 설치
먼저, Node.js가 설치되어 있어야 합니다. Node.js는 공식 웹사이트에서 다운로드할 수 있습니다.

### Svelte 프로젝트 생성
터미널, 명령어로 Svelte 프로젝트를 생성
```bash
npx degit sveltejs/template svelte-typescript-app
cd svelte-typescript-app
```

### TypeScript 설정 추가
프로젝트 디렉토리에서 TypeScript를 설정
```bash
node scripts/setupTypeScript.js
```

### npm을 사용한 의존성 설치
npm 사용하여 의존성을 설치
```bash
npm install
```

### Yarn을 사용한 의존성 설치
npm 대신 Yarn을 사용하여 의존성을 설치
```bash
yarn
```

### 개발 서버 실행
Yarn을 사용하여 개발 서버를 실행
```bash
yarn dev
```
npm을 사용한 경우
```bash
npm run dev
```
localhost:5000에서 개발 서버를 확인할 수 있습니다.

### TypeScript 사용
Svelte 컴포넌트에서 TypeScript를 사용하려면, 스크립트 태그에 lang="ts" 속성을 추가합니다.
```bash
<script lang="ts">
  let name: string = 'Hello';
</script>
```

### 프로젝트 빌드
프로젝트를 빌드할 때는 다음 명령어를 사용합니다
```bash
yarn build
or
npm run build
```