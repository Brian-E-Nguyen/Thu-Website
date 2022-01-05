import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import Connect from '../components/Home/Connect';
import ResumeSection from '../components/Resume/ResumeSection';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <section>
      <Container>
        <Introduction />
        <About />
      </Container>
      <ResumeSection />
      <Container>
        <Connect />
      </Container>
    </section>
  );
};

export default Home;
