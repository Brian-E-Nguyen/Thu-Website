import { Grid } from '@mui/material';

import './Resume.css';

const ResumeExperience = () => {
  return (
    <div>
      <h2 className='resume__header'>Work Experience</h2>
      <Grid container spacing={2}>
        <Grid item sm={12} md={10}>
          <h3 className='resume__leftcolumn--header'>Jobee Tim Viec</h3>
        </Grid>
        <Grid item sm={12} md={2}>
          <h3 className='resume__rightcolumn--header'>May 2020 – Aug. 2020</h3>
        </Grid>
        <Grid item sm={12} md={10}>
          <p className='resume__leftcolumn--description'>Content Writer</p>
          <ul className='resume__list'>
            <li>
              Wrote 15 articles, which attracted more followers towards the
              company
            </li>
            <li>
              Finished articles in a quick and efficient manner before the
              deadlines
            </li>
          </ul>
        </Grid>
        <Grid item sm={12} md={2}>
          <p className='resume__rightcolumn--description'>Online</p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={10}>
          <h3 className='resume__leftcolumn--header'>Qynnatee’s Baby Studio</h3>
        </Grid>
        <Grid item sm={12} md={2}>
          <h3 className='resume__rightcolumn--header'>May 2019 – Sep. 2019</h3>
        </Grid>
        <Grid item sm={12} md={10}>
          <p className='resume__leftcolumn--description'>
            Photography Assistant
          </p>
          <ul className='resume__list'>
            <li>
              Assisted photographers to create the backdrops and customized
              scenic backgrounds to accommodate the need of customers
            </li>
            <li>
              Helped prepare babies for photo shoots by changing their clothes
              and positioning them in the scene
            </li>
          </ul>
        </Grid>
        <Grid item sm={12} md={2}>
          <p className='resume__rightcolumn--description'>
            Ho Chi Minh City, Vietnam
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeExperience;
