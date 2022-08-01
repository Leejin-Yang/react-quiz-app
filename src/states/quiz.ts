import { atom } from 'recoil';

interface IQuizScore {
  correct: number;
  incorrect: number;
}

export const quizScoreState = atom<IQuizScore>({
  key: '#quizScoreState',
  default: { correct: 0, incorrect: 0 },
});

export const startTimeState = atom<number>({
  key: '#startTimeState',
  default: new Date().getTime(),
});
