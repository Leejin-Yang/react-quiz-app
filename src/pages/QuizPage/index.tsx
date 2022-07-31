import { useEffect, useState } from 'react';
import camelcaseKeys from 'camelcase-keys';

import { getQuizListApi } from 'services/quiz';
import { ICamelQuiz } from 'types/quiz';

import Quiz from './Quiz';

import { Container, ProgressBar, Section } from './style';

const QuizPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<ICamelQuiz[]>([]);
  const [stage, setStage] = useState(0);

  const getQuizList = () => {
    getQuizListApi()
      .then((res) => res.data)
      .then((data) => setQuizzes(camelcaseKeys(data.results)))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getQuizList();
  }, []);

  const handleStage = () => {
    setStage((prev) => prev + 1);
  };

  if (isLoading) return <Container>Loading...</Container>;
  if (stage === quizzes.length) return <Container>Finish</Container>;

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
