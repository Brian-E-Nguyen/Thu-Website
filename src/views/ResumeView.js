import Resume from '../components/Resume/Resume';
import DownloadButton from '../components/UI/DownloadButton';

import Particle from '../components/UI/Particle';

const ResumeView = () => {
  return (
    <div>
      <Particle />
      <h1>Resume</h1>
      <DownloadButton />
      <Resume />
      <DownloadButton />
    </div>
  );
};

export default ResumeView;
