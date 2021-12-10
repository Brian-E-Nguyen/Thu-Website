import { Grid } from '@mui/material';

import SocialButtonsSmall from './SocialButtons/SocialButtonsSmall';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} className='footer__section'>
          <div>
            Designed and developed by{' '}
            <a
              href='https://www.brianenguyen.com/'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >
              Brian Nguyen
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className='footer__section'>
          <section className='footer__brand'>
            {new Date().getFullYear()} — Thu Nguyen
          </section>
        </Grid>
        <Grid item xs={12} md={4} className='footer__section'>
          <SocialButtonsSmall />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
