import { Container } from '@mui/material';

import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeVolunteer from './ResumeVolunteer';
import ResumeSkills from './ResumeSkills';
import ResumeHeader from './ResumeHeader';

import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <ResumeHeader />
        <ResumeEducation />
        <ResumeExperience />
        <ResumeVolunteer />
        <ResumeSkills />
      </Container>
    </div>
  );
};

export default Resume;
