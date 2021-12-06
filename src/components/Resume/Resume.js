import { Container } from '@mui/material';

import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
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
        <p>
          A California second-year business administration student seeking an
          internship position in accounting to apply knowledge and to support
          the company’s growth.
        </p>
        <ResumeEducation />
        <ResumeExperience />
      </Container>
    </div>
  );
};

export default Resume;
