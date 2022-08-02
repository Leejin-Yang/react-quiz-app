<div align='center'>

# Quiz App
### [배포 주소](https://leejinyang-quiz.netlify.app/)

<br>

|메인 화면|퀴즈 풀기|
|:-:|:-:|
|![메인 화면](https://user-images.githubusercontent.com/78616893/182285868-05df6b69-3d5f-4db2-97a6-cf5c03c8671f.png)|![퀴즈 풀기](https://user-images.githubusercontent.com/78616893/182285952-76dece3f-8837-4239-8672-e1d442b4d5ea.png)|
|결과 화면|오답 노트|
|![결과 화면](https://user-images.githubusercontent.com/78616893/182285959-9d5d2335-4cda-4744-8288-c68c8d0ec5bb.png)|![오답 노트](https://user-images.githubusercontent.com/78616893/182285966-36d7e462-5091-46b3-8426-09cb5b19dc0d.png)|

</div>

<br>

## 기술 스택
> TypeScript, React, Styled-Components, Recoil

<br>

## 프로젝트 실행 방법

1. yarn 설치

```
 npm i yarn
```

2. repository 클론

```
git clone https://github.com/Leejin-Yang/react-quiz-app.git
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

## 구현 기능 목록
- [x] 홈 화면
  - [x] 퀴즈 풀기 버튼을 클릭해 풀기 시작
- [x] 퀴즈 풀기
  - [x] 4개의 보기 중 선택
  - [x] 답안 선택 후 정답 유무 확인
  - [x] 다음 문항 버튼 클릭하여 다음 문항 이동
- [x] 퀴즈 결과
  - [x] 퀴즈 소요 시간
  - [x] 정답 수, 오답 수
  - [x] 정답 오답 비율 차트 표기
  - [x] 다시 풀기 버튼으로 퀴즈 다시 풀기
- [x] 오답노트
  - [x] 오답 문제 리스트 확인
  - [x] 사용자 선택 값과 정답 비교
  - [x] 돌아가기, 다시 풀기 버튼
