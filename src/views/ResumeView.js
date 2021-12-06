import Resume from '../components/Resume/Resume';
import DownloadButton from '../components/UI/DownloadButton';

const ResumeView = () => {
  return (
    <div>
      <h1>Resume</h1>
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeView;
