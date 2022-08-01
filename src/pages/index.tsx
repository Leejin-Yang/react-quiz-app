import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import QuizPage from './QuizPage';
import QuizResult from './QuizResult';
import StudyNote from './StudyNote';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='quizzes' element={<QuizPage />} />
        <Route path='quizzes/result' element={<QuizResult />} />
        <Route path='study-note' element={<StudyNote />} />
      </Route>
    </Routes>
  );
};

export default App;
