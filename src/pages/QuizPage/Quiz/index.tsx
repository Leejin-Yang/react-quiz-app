import { useEffect, useState } from 'react';

import { ICamelQuiz } from 'types/quiz';

import { AnswerItem, AnswerList, Container, CustomP, Question } from './style';

interface Props {
  quiz: ICamelQuiz;
}

const shuffleAnswer = (arr: string[]) => arr.sort(() => Math.random() - 0.5);

const Quiz = ({ quiz }: Props) => {
  const { category, difficulty, question, correctAnswer, incorrectAnswers } = quiz;
  const [answerList, setAnswerList] = useState<string[]>();

  useEffect(() => {
    setAnswerList(shuffleAnswer([...incorrectAnswers, correctAnswer]));
  }, [correctAnswer, incorrectAnswers]);

  return (
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
            <button type='button' data-answer={item}>
              {item}
            </button>
          </AnswerItem>
        ))}
      </AnswerList>
    </Container>
  );
};

export default Quiz;
