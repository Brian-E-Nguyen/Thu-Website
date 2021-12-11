import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <section>
      <Container>
        <Introduction />
        <About />
      </Container>
    </section>
  );
};

export default Home;
