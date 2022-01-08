import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './SocialButtons.css';

const SocialButtonsSmall = () => {
  const email = 'mailto:nhanhthu920@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/thu-h-nguyen2/';

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
    </div>
  );
};

export default SocialButtonsSmall;
