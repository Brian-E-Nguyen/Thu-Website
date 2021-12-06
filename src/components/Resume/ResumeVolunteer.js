import { Grid } from '@mui/material';

import './Resume.css';

const ResumeVolunteer = () => {
  return (
    <div>
      <h2 className='resume__header'>Volunteer Experience</h2>
      {/* TZU CH FOUNDATION */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={10}>
          <h3 className='resume__leftcolumn--header'>Tzu Chi Foundation</h3>
        </Grid>
        <Grid item sm={12} md={2}>
          <h3 className='resume__rightcolumn--header'>Aug. 2021 - Present</h3>
        </Grid>
        <Grid item sm={12} md={10}>
          <p className='resume__leftcolumn--description'>
            VP of Administration
          </p>
        </Grid>
        <Grid item sm={12} md={2}>
          <p className='resume__rightcolumn--description'>Norwalk, CA</p>
        </Grid>
        <div>
          <ul className='resume__list'>
            <li>
              Serving as the VP of Administration at California State
              University, Long Beach to track members’ volunteering hours using
              Microsoft Excel
            </li>
            <li>
              Took notes during officer meetings so board members can look back
              on documentations
            </li>
            <li>
              Participated at various in-person and online volunteering events,
              such as food packaging, stuffed animal sewing, and tutoring
              services
            </li>
            <li>
              Provided warm and friendly experiences for volunteers and those
              receiving services
            </li>
          </ul>
        </div>
      </Grid>

      {/* HO CHI MINH CITY OPEN UNIVERSITY */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <h3 className='resume__leftcolumn--header'>
            Ho Chi Minh City Open University
          </h3>
        </Grid>
        <Grid item xs={12} md={2}>
          <h3 className='resume__rightcolumn--header'>
            Jun. 2019 - Sept. 2019
          </h3>
        </Grid>
        <Grid item xs={12} md={10}>
          <p className='resume__leftcolumn--description'>
            School Guidance Volunteer
          </p>
          <p className='resume__description'>
            Assisted students in finding dorms for them to live in while they
            attend the university; provided students with information about the
            university and counselling about its courses
          </p>
        </Grid>
        <Grid item xs={12} md={2}>
          <p className='resume__rightcolumn--description'>
            Ho Chi Minh City, Vietnam
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeVolunteer;
