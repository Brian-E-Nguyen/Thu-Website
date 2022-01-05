import Introduction from '../components/Home/Introduction';
import About from '../components/Home/About';
import ResumeSection from '../components/Resume/ResumeSection';

import { Container } from '@mui/material';

const Home = () => {
  return (
    <section style={{ marginTop: 10 + 'rem' }}>
      <Container>
        <Introduction />
        <About />
      </Container>
      <ResumeSection />
    </section>
  );
};

export default Home;
