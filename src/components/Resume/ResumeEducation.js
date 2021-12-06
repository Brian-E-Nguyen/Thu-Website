import { Grid } from '@mui/material';

import './Resume.css';

const ResumeEducation = () => {
  return (
    <div>
      <h2 className='resume__header'>Education</h2>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>Cypress College</h3>
        </Grid>
        <Grid item sm={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>Jan. 2020 – Jan. 2023</h3>
        </Grid>
        <Grid item sm={12} md={4} lg={6}>
          <p className='resume__leftcolumn--description'>
            Business Administration Associate in Science Degree for Transfer in
            Accounting
          </p>
        </Grid>
        <Grid item sm={12} md={8} lg={6}>
          <p className='resume__rightcolumn--description'>
            GPA 4.0 Cypress, CA
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <h3 className='resume__leftcolumn--header'>
            Ho Chi Minh City Open University
          </h3>
        </Grid>
        <Grid item sm={12} md={6}>
          <h3 className='resume__rightcolumn--header'>Sep. 2017 – Dec. 2019</h3>
        </Grid>
        <Grid item sm={12} md={6}>
          <p className='resume__leftcolumn--description'>
            Bachelor of Arts in English
          </p>
        </Grid>
        <Grid item sm={12} md={6}>
          <p className='resume__rightcolumn--description'>
            Ho Chi Minh City, Vietnam
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeEducation;
