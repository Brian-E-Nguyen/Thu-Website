import { Container } from '@mui/material';

import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <h1 className='resume__title'>Thu Nguyen</h1>
        {/* Resume Links */}
        <p className='resume__link'>
          <a href='mailto:nhanhthu920@gmail.com'>nhanhthu920@gmail.com</a>
          <a
            className='resume__link'
            href='https://www.linkedin.com/in/thuhng24/'
          >
            https://www.linkedin.com/in/thuhng24/
          </a>
          <a href='#'>657-238-7860</a>
        </p>
      </Container>
    </div>
  );
};

export default Resume;
