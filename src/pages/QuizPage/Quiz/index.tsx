import { MouseEventHandler, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { quizScoreState, studyNoteListState } from 'states/quiz';
import { ICamelQuiz } from 'types/quiz';

import AnswerModal from 'components/Modal/AnswerModal';

import { AnswerItem, AnswerList, Container, CustomP, Question } from './style';

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

  const setStudyNoteList = useSetRecoilState(studyNoteListState);
  const setQuizScore = useSetRecoilState(quizScoreState);

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
      setStudyNoteList((prev) => [...prev, note]);
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
      <Container>
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
      </Container>
      {showModal && <AnswerModal onClose={onClose} handleStage={handleStage} message={answerMessage} />}
    </>
  );
};

export default Quiz;
