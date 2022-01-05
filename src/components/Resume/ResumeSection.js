import Resume from './Resume';
import DownloadButton from '../UI/DownloadButton';

const ResumeSection = () => {
  return (
    <div>
      <h1 className='resume-section-header'> Resume</h1>
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeSection;
