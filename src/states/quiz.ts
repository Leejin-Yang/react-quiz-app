import { atom } from 'recoil';

import { INote } from 'types/quiz';

interface IQuizScore {
  correct: number;
  incorrect: number;
}

interface IStudyNoteToggle {
  [key: number]: boolean;
}

export const quizScoreState = atom<IQuizScore>({
  key: '#quizScoreState',
  default: { correct: 0, incorrect: 0 },
});

export const startTimeState = atom<number>({
  key: '#startTimeState',
  default: new Date().getTime(),
});

export const studyNoteListState = atom<INote[]>({
  key: '#studyNoteListState',
  default: [],
});

export const studyNoteToggleState = atom<IStudyNoteToggle>({
  key: '#studyNoteToggleState',
  default: {},
});
