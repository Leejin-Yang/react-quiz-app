import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMount } from 'react-use';
import dayjs from 'dayjs';

import Button from 'components/Button';
import { quizScoreState, startTimeState } from 'states/quiz';

import { Container, Section, Wrapper } from './style';

const QuizResult = () => {
  const [quizTime, setQuizTime] = useState(0);

  const navigate = useNavigate();
  const startTime = useRecoilValue(startTimeState);
  const { correct, incorrect } = useRecoilValue(quizScoreState);

  useMount(() => {
    const time = dayjs(new Date().getTime());
    const timeDiff = time.diff(startTime, 's', true);

    setQuizTime(timeDiff);
  });

  const onClick = () => {
    navigate('/quizzes', { replace: true });
  };

  return (
    <Container>
      <Section>
        <h1>Result</h1>
        <Wrapper>
          <p>
            Correct: <strong>{correct}</strong>
          </p>
          <p>
            Incorrect: <strong>{incorrect}</strong>
          </p>
          <p>
            Time: <strong>{quizTime} 초</strong>
          </p>
        </Wrapper>
      </Section>
      <Button onClick={onClick}>다시 풀기</Button>
    </Container>
  );
};

export default QuizResult;
