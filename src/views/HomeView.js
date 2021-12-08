import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import Connect from '../components/Home/Connect';
import Particle from '../components/UI/Particle';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <section>
      <Particle />
      <Container>
        <Introduction />
        <About />
        <Connect />
      </Container>
    </section>
  );
};

export default Home;
