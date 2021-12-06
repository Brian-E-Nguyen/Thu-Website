import { Container, Grid } from '@mui/material';

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
        <div>
          <h2 className='resume__header'>Education</h2>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <h3 className='resume__leftcolumn--header'>Cypress College</h3>
            </Grid>
            <Grid item md={6}>
              <h3 className='resume__rightcolumn--header'>
                Jan. 2020 – Jan. 2023
              </h3>
            </Grid>
            <Grid item md={6}>
              <p className='resume__leftcolumn--description'>
                Business Administration Associate in Science Degree for Transfer
                in Accounting
              </p>
            </Grid>
            <Grid item md={6}>
              <p className='resume__rightcolumn--description'>
                GPA 4.0 Cypress, CA
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
