import { fireEvent, render } from '@testing-library/react';

import Home from 'pages/Home';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

describe('<Home />', () => {
  it('matches snapshot', () => {
    const utils = render(<Home />);

    expect(utils.container).toMatchSnapshot();
  });
  it('has title and button', () => {
    const utils = render(<Home />);

    utils.getByText('Quiz');
    utils.getByText('퀴즈 풀기');
  });
  it('navigate to quiz page', () => {
    const utils = render(<Home />);
    const quizButton = utils.getByText('퀴즈 풀기');

    fireEvent.click(quizButton);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/quizzes');
  });
});
