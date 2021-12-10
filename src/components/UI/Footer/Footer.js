import { Grid } from '@mui/material';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4} className='footer__section'>
          Designed and developed by{' '}
          <a
            href='https://www.brianenguyen.com/'
            target='_blank'
            className='footer__link'
          >
            Brian Nguyen
          </a>
        </Grid>
        <Grid item sm={12} md={4} className='footer__section'>
          <section className='footer__brand'>
            {new Date().getFullYear()} — Thu Nguyen
          </section>
        </Grid>
        <Grid item sm={12} md={4} className='footer__section'>
          Test
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
