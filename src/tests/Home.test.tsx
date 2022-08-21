import { fireEvent, render, screen } from '@testing-library/react';

import Home from 'pages/Home';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

describe('<Home />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
  it('has title, description and button', () => {
    render(<Home />);

    screen.getByText('Quiz');
    screen.getByText(/간단한 퀴즈를 풀어보세요❗️/i);
    screen.getByText(/퀴즈는 영어로 제공됩니다 🙂/i);
    screen.getByText('퀴즈 풀기');
    screen.getByText('오답 노트');
  });
  it('navigate to quiz page', () => {
    render(<Home />);
    const quizButton = screen.getByText('퀴즈 풀기');

    fireEvent.click(quizButton);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/quizzes');
  });
  it('navigate to study note page', () => {
    render(<Home />);
    const studyNoteButton = screen.getByText('오답 노트');

    fireEvent.click(studyNoteButton);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/study-note', { replace: true });
  });
});
