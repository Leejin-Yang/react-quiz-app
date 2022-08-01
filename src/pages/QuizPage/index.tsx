import { useEffect, useState } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useMount } from 'react-use';
import camelcaseKeys from 'camelcase-keys';

import { getQuizListApi } from 'services/quiz';
import { quizScoreState, startTimeState } from 'states/quiz';
import { ICamelQuiz } from 'types/quiz';

import Quiz from './Quiz';

import { Container, ProgressBar, Section } from './style';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState<ICamelQuiz[]>([]);
  const [stage, setStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const setStartTime = useSetRecoilState(startTimeState);
  const resetScore = useResetRecoilState(quizScoreState);

  const getQuizList = () => {
    getQuizListApi()
      .then((res) => res.data)
      .then((data) => setQuizzes(camelcaseKeys(data.results)))
      .finally(() => setIsLoading(false));
  };

  useMount(() => {
    const time = new Date().getTime();

    setStartTime(time);
  });

  useEffect(() => {
    getQuizList();
    resetScore();
  }, [resetScore]);

  const handleStage = () => {
    setStage((prev) => prev + 1);

    if (stage + 1 === quizzes.length) {
      navigate('/quizzes/result', { replace: true });
    }
  };

  if (isLoading)
    return (
      <Container>
        <Section>
          <h1>Loading...</h1>
        </Section>
      </Container>
    );

  return (
    <Container>
      <Section>
        <ProgressBar aria-label='quiz-progress' value={(stage / quizzes.length) * 100} />
        <h1>
          Quiz {stage + 1} of {quizzes.length}
        </h1>
      </Section>
      <Quiz quiz={quizzes[stage]} handleStage={handleStage} />
    </Container>
  );
};

export default QuizPage;
