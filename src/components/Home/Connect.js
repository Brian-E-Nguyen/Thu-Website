import './Connect.css';
import SocialButtons from '../UI/SocialButtons/SocialButtons';
const Connect = () => {
  return (
    <div className='connect'>
      <h1 className='connect__header'>Connect</h1>
      <p className='connect__description'>
        Feel free to use any of the platforms to contact / connect with me. I'd
        love hearing from you!
      </p>
      <SocialButtons />
    </div>
  );
};

export default Connect;
