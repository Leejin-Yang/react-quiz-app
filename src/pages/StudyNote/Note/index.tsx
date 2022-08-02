import { useRecoilState } from 'recoil';

import { studyNoteToggleState } from 'states/quiz';
import { INote } from 'types/quiz';

import { AnswerItem, NoteItem } from './style';

interface Props {
  note: INote;
  index: number;
}

const Note = ({ note, index }: Props) => {
  const { category, question, correctAnswer, playerAnswer } = note;

  const [{ [index]: isUnfold }, setStudyNoteToggle] = useRecoilState(studyNoteToggleState);

  const onClick = () => {
    setStudyNoteToggle((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <NoteItem key={question}>
        <button type='button' onClick={onClick}>
          <p>
            Category: <strong>{category}</strong>
          </p>
          <p>{question}</p>
        </button>
      </NoteItem>
      {isUnfold && (
        <AnswerItem>
          <p>Your Answer: {playerAnswer}</p>
          <p>
            Correct Answer: <strong>{correctAnswer}</strong>
          </p>
        </AnswerItem>
      )}
    </>
  );
};

export default Note;
