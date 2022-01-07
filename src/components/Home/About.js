import './About.css';

const About = () => {
  return (
    <div id='about'>
      <h1 className='header'>About Me</h1>
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
          At the moment, I am trying to earn high scores at school, join clubs,
          and do volunteering to obtain knowledge and assimilate to American
          culture which will prepare me for my career
        </p>
        <p>
          Additionally, I believe that "When you want to do something, all the
          universe conspires in helping you to achieve it" - Paulo Coeho.
          Therefore, have a strong desire, try your best to achieve it, and
          celebrate the result
        </p>
      </div>
    </div>
  );
};

export default About;
