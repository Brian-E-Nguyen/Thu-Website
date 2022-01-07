import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import ResumeSection from '../components/Resume/ResumeSection';
import Contact from '../components/Contact/Contact';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <section style={{ marginTop: 10 + 'rem' }}>
      <Container>
        <Introduction />
        <About />
      </Container>
      <ResumeSection />
      <Container>
        <Contact />
      </Container>
    </section>
  );
};

export default Home;
