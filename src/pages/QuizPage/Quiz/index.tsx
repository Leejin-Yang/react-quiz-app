import { MouseEventHandler, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import store from 'store';

import AnswerModal from 'components/Modal/AnswerModal';
import { quizScoreState } from 'states/quiz';
import { ICamelQuiz, INote } from 'types/quiz';

import { AnswerItem, AnswerList, CustomP, Question } from './style';

const ANSWER_MESSAGE = {
  CORRECT: '정답입니다 😊',
  INCORRECT: '오답입니다 😢',
};
const shuffleAnswer = (arr: string[]) => arr.sort(() => Math.random() - 0.5);

interface Props {
  quiz: ICamelQuiz;
  handleStage: () => void;
}

const Quiz = ({ quiz, handleStage }: Props) => {
  const { category, difficulty, question, correctAnswer, incorrectAnswers } = quiz;
  const [answerList, setAnswerList] = useState<string[]>();
  const [answerMessage, setAnswerMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const setQuizScore = useSetRecoilState(quizScoreState);

  const setLocalStudyNote = (note: INote) => {
    const localStudyNoteList = store.get('quiz-study-note');

    if (!localStudyNoteList) {
      store.set('quiz-study-note', [note]);
      return;
    }

    const isNoted = localStudyNoteList.find((item: INote) => item.question === note.question);
    const newStudyNoteList = isNoted ? localStudyNoteList : [...localStudyNoteList, note];
    store.set('quiz-study-note', newStudyNoteList);
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { answer } = e.currentTarget.dataset;

    if (!answer) return;

    if (answer === correctAnswer) {
      setAnswerMessage(ANSWER_MESSAGE.CORRECT);
      setQuizScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      const note = { category, question, correctAnswer, playerAnswer: answer };

      setAnswerMessage(ANSWER_MESSAGE.INCORRECT);
      setQuizScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setLocalStudyNote(note);
    }

    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setAnswerList(shuffleAnswer([...incorrectAnswers, correctAnswer]));
  }, [correctAnswer, incorrectAnswers]);

  return (
    <>
      <div>
        <div>
          <CustomP>
            Category: <strong>{category}</strong>
          </CustomP>
          <CustomP>
            Difficulty: <strong>{difficulty}</strong>
          </CustomP>
        </div>
        <Question>{question}</Question>
        <AnswerList>
          {answerList?.map((item) => (
            <AnswerItem key={`${question}-${item}`}>
              <button type='button' data-answer={item} onClick={onClick}>
                {item}
              </button>
            </AnswerItem>
          ))}
        </AnswerList>
      </div>
      {showModal && <AnswerModal onClose={onClose} handleStage={handleStage} message={answerMessage} />}
    </>
  );
};

export default Quiz;
