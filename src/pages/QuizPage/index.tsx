import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useMount } from 'react-use';
import camelcaseKeys from 'camelcase-keys';

import { getQuizListApi } from 'services/quiz';
import { quizScoreState, startTimeState } from 'states/quiz';
import { ICamelQuiz } from 'types/quiz';

import Quiz from './Quiz';

import { Container, ProgressBar, Section } from './style';

const QuizPage = () => {
  const [quizList, setQuizList] = useState<ICamelQuiz[]>([]);
  const [stage, setStage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const setStartTime = useSetRecoilState(startTimeState);
  const resetScore = useResetRecoilState(quizScoreState);

  const getQuizList = () => {
    setIsLoading(true);
    getQuizListApi()
      .then((res) => res.data)
      .then((data) => setQuizList(camelcaseKeys(data.results)))
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

  return (
    <Container>
      {quizList.length > 0 && (
        <>
          <Section>
            <ProgressBar aria-label='quiz-progress' value={(stage / quizList.length) * 100} />
            <h1>
              Quiz {stage + 1} of {quizList.length}
            </h1>
          </Section>
          <Quiz quiz={quizList[stage]} handleStage={handleStage} />
        </>
      )}
    </Container>
  );
};

export default QuizPage;
