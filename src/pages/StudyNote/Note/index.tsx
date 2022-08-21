import { useRecoilState } from 'recoil';

import { studyNoteToggleState } from 'states/quiz';
import { INote } from 'types/quiz';

import { AnswerItem, DeleteButton, NoteItem, QuestionButton } from './style';

interface Props {
  note: INote;
  index: number;
  deleteNote: (question: string) => void;
}

const Note = ({ note, index, deleteNote }: Props) => {
  const { category, question, correctAnswer, playerAnswer } = note;

  const [{ [index]: isUnfold }, setStudyNoteToggle] = useRecoilState(studyNoteToggleState);

  const onClickQuestionButton = () => {
    setStudyNoteToggle((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const onClickDeleteButton = () => {
    deleteNote(question);
  };

  return (
    <>
      <NoteItem key={question}>
        <QuestionButton type='button' onClick={onClickQuestionButton}>
          <p>
            Category: <strong>{category}</strong>
          </p>
          <p>{question}</p>
        </QuestionButton>
        <DeleteButton type='button' onClick={onClickDeleteButton}>
          ❌
        </DeleteButton>
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
