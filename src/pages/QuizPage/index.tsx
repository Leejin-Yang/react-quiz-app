import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useMount } from 'react-use';
import camelcaseKeys from 'camelcase-keys';

import { getQuizListApi } from 'services/quiz';
import { quizScoreState, startTimeState } from 'states/quiz';
import { ICamelQuiz } from 'types/quiz';

import Quiz from './Quiz';

import { Container, ProgressBar, Section, TitleWrapper } from './style';

const QuizPage = () => {
  const [quizList, setQuizList] = useState<ICamelQuiz[]>([]);
  const [stage, setStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const setStartTime = useSetRecoilState(startTimeState);
  const resetScore = useResetRecoilState(quizScoreState);

  const getQuizList = () => {
    getQuizListApi()
      .then((res) => res.data)
      .then((data) => setQuizList(camelcaseKeys(data.results)))
      .catch(() => setIsError(true))
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

    if (stage + 1 === quizList.length) {
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

  if (isError)
    return (
      <Container>
        <Section>
          <h1>Network Error</h1>
        </Section>
      </Container>
    );

  return (
    <Container>
      {quizList.length > 0 && (
        <Section>
          <TitleWrapper>
            <ProgressBar aria-label='quiz-progress' value={(stage / quizList.length) * 100} />
            <h1>
              Quiz {stage + 1} of {quizList.length}
            </h1>
          </TitleWrapper>
          <Quiz quiz={quizList[stage]} handleStage={handleStage} />
        </Section>
      )}
    </Container>
  );
};

export default QuizPage;
