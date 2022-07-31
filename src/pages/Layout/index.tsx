import { Outlet } from 'react-router-dom';

import { Container, Wrapper } from './style';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Layout;
