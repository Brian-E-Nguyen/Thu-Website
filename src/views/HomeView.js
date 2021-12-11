import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import Particle from '../components/UI/Particle';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <section>
      <Particle />
      <Container>
        <Introduction />
        <About />
      </Container>
    </section>
  );
};

export default Home;
