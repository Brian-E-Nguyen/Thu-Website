import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './SocialButtons.css';

const SocialButtonsSmall = () => {
  const email = 'mailto:nhanhthu920@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/thu-h-nguyen2/';
  const facebook = 'https://www.facebook.com/profile.php?id=100045753340354';
  const instagram = 'https://www.instagram.com/thu.n02/';

  return (
    <div>
      {/* Email */}
      <a href={email} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button--sm'>
          <EmailIcon fontSize='small' />
        </IconButton>
      </a>
      {/* LinkedIn */}
      <a href={linkedIn} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button--sm'>
          <LinkedInIcon fontSize='small' />
        </IconButton>
      </a>
      {/* Facebook */}
      <a href={facebook} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button--sm'>
          <FacebookIcon fontSize='small' />
        </IconButton>
      </a>
      {/* Instagram */}
      <a href={instagram} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button--sm'>
          <InstagramIcon fontSize='small' />
        </IconButton>
      </a>
    </div>
  );
};

export default SocialButtonsSmall;
