import { useEffect, useState } from 'react';
import camelcaseKeys from 'camelcase-keys';

import { getQuizListApi } from 'services/quiz';
import { ICamelQuiz } from 'types/quiz';

import Quiz from './Quiz';

import { Container, Section } from './style';

const QuizPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<ICamelQuiz[]>([]);
  const [stage] = useState(0);

  const getQuizList = () => {
    getQuizListApi()
      .then((res) => res.data)
      .then((data) => setQuizzes(camelcaseKeys(data.results)))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getQuizList();
  }, []);

  if (isLoading) return <Container>Loading...</Container>;
  if (stage + 1 === quizzes.length) return <Container>Finish</Container>;

  return (
    <Container>
      <Section>
        <h1>
          Quiz {stage + 1} of {quizzes.length}
        </h1>
      </Section>
      <Quiz quiz={quizzes[stage]} />
    </Container>
  );
};

export default QuizPage;
