import Resume from '../components/Resume/Resume';
import DownloadButton from '../components/UI/DownloadButton';

const ResumeView = () => {
  return (
    <div style={{ marginTop: 10 + 'rem' }}>
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeView;
