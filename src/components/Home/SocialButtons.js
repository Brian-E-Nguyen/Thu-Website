import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialButtons = () => {
  const email = 'mailto:nhanhthu920@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/thu-h-nguyen2/';
  const facebook = 'https://www.facebook.com/profile.php?id=100045753340354';
  const instagram = 'https://www.instagram.com/thu.n02/';

  return (
    <div>
      {/* Email */}
      <a href={email} target='_blank' rel='noreferrer'>
        <IconButton color='secondary' component='span' size='large'>
          <EmailIcon fontSize='large' />
        </IconButton>
      </a>
      {/* LinkedIn */}
      <a href={linkedIn} target='_blank' rel='noreferrer'>
        <IconButton color='secondary' component='span' size='large'>
          <LinkedInIcon fontSize='large' />
        </IconButton>
      </a>
      {/* Facebook */}
      <a href={facebook} target='_blank' rel='noreferrer'>
        <IconButton color='secondary' component='span' size='large'>
          <FacebookIcon fontSize='large' />
        </IconButton>
      </a>
      {/* Instagram */}
      <a href={instagram} target='_blank' rel='noreferrer'>
        <IconButton color='secondary' component='span' size='large'>
          <InstagramIcon fontSize='large' />
        </IconButton>
      </a>
    </div>
  );
};

export default SocialButtons;
