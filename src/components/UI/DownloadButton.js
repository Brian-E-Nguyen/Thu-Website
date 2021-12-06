import Button from '@mui/material/Button';
import { CloudDownload } from '@mui/icons-material';

const DownloadButton = () => {
  return (
    <center>
      <a href='/Thu_Resume.pdf' download>
        <Button variant='contained' startIcon={<CloudDownload />}>
          Download
        </Button>
      </a>
    </center>
  );
};

export default DownloadButton;
