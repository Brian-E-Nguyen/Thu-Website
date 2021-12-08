import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h1 className='about__header'>About Me</h1>
      <div className='about__description'>
        <p>
          I am an international student who is currently studying at
          <span className='about__description--emphasis'> Cypress College</span>
          . I plan to transfer to
          <span className='about__description--emphasis'>
            {' '}
            California State University, Fullerton{' '}
          </span>
          to obtain a
          <span className='about__description--emphasis'>
            {' '}
            Bachelor's in Accounting{' '}
          </span>
        </p>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..
        </p>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..
        </p>
      </div>
    </div>
  );
};

export default About;
