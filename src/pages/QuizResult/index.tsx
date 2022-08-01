import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMount } from 'react-use';
import dayjs from 'dayjs';

import Button from 'components/Button';
import { quizScoreState, startTimeState } from 'states/quiz';

import { Container, ScoreText, Section, Wrapper } from './style';
import Chart from './Chart';

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
            Time: <strong>{quizTime} 초</strong>
          </p>
        </Wrapper>
        <Wrapper>
          <ScoreText>
            {correct} / {correct + incorrect}
          </ScoreText>
          <Chart correct={correct} incorrect={incorrect} />
        </Wrapper>
      </Section>
      <div>
        <Button onClick={onClick}>다시 풀기</Button>
      </div>
    </Container>
  );
};

export default QuizResult;
