import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialButtons = () => {
  return (
    <div>
      <IconButton color='secondary' component='span' size='large'>
        <EmailIcon fontSize='large' />
      </IconButton>
      <IconButton color='secondary' component='span' size='large'>
        <LinkedInIcon fontSize='large' />
      </IconButton>
      <IconButton color='secondary' component='span' size='large'>
        <FacebookIcon fontSize='large' />
      </IconButton>
      <IconButton color='secondary' component='span' size='large'>
        <InstagramIcon fontSize='large' />
      </IconButton>
    </div>
  );
};

export default SocialButtons;
