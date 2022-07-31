import { useEffect, useState } from 'react';

import { getQuizListApi } from 'services/quiz';
import { IQuiz } from 'types/quiz';

import { Container, Section } from './style';

const Quiz = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<IQuiz[]>();

  const getQuizList = () => {
    getQuizListApi()
      .then((res) => res.data)
      .then((data) => setQuizzes(data.results))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getQuizList();
  }, []);

  if (isLoading) return <Container>Loading...</Container>;

  return (
    <Container>
      <Section>
        <h1>Quiz</h1>
      </Section>
    </Container>
  );
};

export default Quiz;
