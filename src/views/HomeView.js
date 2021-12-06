import Introduction from '../components/Introduction';
import About from '../components/About';
import Contact from '../components/Contact';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Introduction />
      <About />
      <Contact />
    </Container>
  );
};

export default Home;
