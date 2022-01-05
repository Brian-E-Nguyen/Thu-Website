import Resume from './Resume';
import DownloadButton from '../UI/DownloadButton';

const ResumeSection = () => {
  return (
    <div>
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeSection;
