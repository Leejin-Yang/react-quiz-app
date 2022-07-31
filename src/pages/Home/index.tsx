import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';

import { Container, Section } from './style';

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/quizzes');
  };

  return (
    <Container>
      <Section>
        <h2>Quiz</h2>
        <p>
          간단한 퀴즈를 풀어보세요❗️ <br /> 퀴즈는 영어로 제공됩니다 🙂
        </p>
      </Section>
      <div>
        <Button onClick={onClick}>퀴즈 풀기</Button>
      </div>
    </Container>
  );
};

export default Home;
