import './Introduction.css';

import { Grid } from '@mui/material';

import ProfilePicture from './ProfilePicture';

const Introduction = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={8}>
        <h1 className='introduction__header'>Hi there!</h1>
        <h1 className='introduction__header'>
          My name is <span className='introduction__name'>Thu Nguyen</span>
        </h1>
        <h2 className='introduction__subheader'> I'm an Aspiring Accountant</h2>
      </Grid>
      <Grid item sm={12} md={4}>
        <ProfilePicture />
      </Grid>
    </Grid>
  );
};

export default Introduction;
