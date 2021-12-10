import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './SocialButtons.css';

const SocialButtons = () => {
  const email = 'mailto:nhanhthu920@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/thu-h-nguyen2/';
  const facebook = 'https://www.facebook.com/profile.php?id=100045753340354';
  const instagram = 'https://www.instagram.com/thu.n02/';

  return (
    <div>
      {/* Email */}
      <a href={email} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button'>
          <EmailIcon fontSize='medium' />
        </IconButton>
      </a>
      {/* LinkedIn */}
      <a href={linkedIn} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button'>
          <LinkedInIcon fontSize='medium' />
        </IconButton>
      </a>
      {/* Facebook */}
      <a href={facebook} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button'>
          <FacebookIcon fontSize='medium' />
        </IconButton>
      </a>
      {/* Instagram */}
      <a href={instagram} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='social-button'>
          <InstagramIcon fontSize='medium' />
        </IconButton>
      </a>
    </div>
  );
};

export default SocialButtons;
