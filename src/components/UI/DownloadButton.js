import Button from '@mui/material/Button';
import { CloudDownload } from '@mui/icons-material';

import './DownloadButton.css';

const DownloadButton = () => {
  return (
    <center>
      <a
        className='download-button'
        href='https://u.pcloud.link/publink/show?code=XZM9NAXZgLeSgdwP2l5zEFzxwE7kKzwPW1jV'
        download='Thu_Resume.pdf'
      >
        <Button variant='contained' startIcon={<CloudDownload />}>
          Download
        </Button>
      </a>
    </center>
  );
};

export default DownloadButton;
