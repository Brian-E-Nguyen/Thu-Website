import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Introduction />
      <About />
      <Contact />
    </Container>
  );
};

export default Home;
