import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Quiz from './Quiz';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='quizzes' element={<Quiz />} />
      </Route>
    </Routes>
  );
};

export default App;
