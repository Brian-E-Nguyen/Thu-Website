import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import Connect from '../components/Home/Connect';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Introduction />
      <About />
      <Connect />
    </Container>
  );
};

export default Home;
