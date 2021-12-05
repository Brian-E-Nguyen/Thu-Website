import { Grid } from '@mui/material';

import ProfilePicture from './ProfilePicture';

const Introduction = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <h1>Hi there!</h1>
        <h1>My name is Thu Nguyen</h1>
      </Grid>
      <Grid item sm={12} md={6}>
        <ProfilePicture />
      </Grid>
    </Grid>
  );
};

export default Introduction;
