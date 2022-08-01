import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMount } from 'react-use';
import dayjs from 'dayjs';

import Button from 'components/Button';
import { quizScoreState, startTimeState } from 'states/quiz';

import { ButtonWrapper, Container, CustomP, ScoreText, Section, Wrapper } from './style';
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

  return (
    <Container>
      <Section>
        <h1>Result</h1>
        <CustomP>
          Time: <strong>{quizTime} 초</strong>
        </CustomP>
        <Wrapper>
          <ScoreText>
            {correct} / {correct + incorrect}
          </ScoreText>
          <Chart correct={correct} incorrect={incorrect} />
        </Wrapper>
      </Section>
      <ButtonWrapper>
        <Button onClick={() => navigate('/quizzes', { replace: true })}>다시 풀기</Button>
        <Button onClick={() => navigate('/study-note', { replace: true })}>오답 노트</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default QuizResult;
