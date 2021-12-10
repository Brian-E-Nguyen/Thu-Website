import Resume from '../components/Resume/Resume';
import DownloadButton from '../components/UI/DownloadButton';

import Particle from '../components/UI/Particle';

const ResumeView = () => {
  return (
    <div style={{ marginTop: 10 + 'rem' }}>
      <Particle />
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeView;
