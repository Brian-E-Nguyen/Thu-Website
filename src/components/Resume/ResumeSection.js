import Resume from './Resume';
import DownloadButton from '../UI/DownloadButton';

const ResumeSection = () => {
  return (
    <div id='resume'>
      <h1 className='header'> Resume</h1>
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeSection;
