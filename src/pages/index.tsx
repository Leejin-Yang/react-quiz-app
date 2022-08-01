import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import QuizPage from './QuizPage';
import QuizResult from './QuizResult';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='quizzes' element={<QuizPage />} />
        <Route path='quizzes/result' element={<QuizResult />} />
      </Route>
    </Routes>
  );
};

export default App;
