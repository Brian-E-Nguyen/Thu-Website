const ResumeHeader = () => {
  return (
    <div>
      <h1 className='resume__title'>Thu Nguyen</h1>
      {/* Resume Links */}
      {/* <p className='resume__links'>
        <a href='mailto:nhanhthu920@gmail.com'>nhanhthu920@gmail.com</a>
        <a
          className='resume__link'
          href='https://www.linkedin.com/in/thuhng24/'
        >
          https://www.linkedin.com/in/thuhng24/
        </a>
        <a href='#'>657-238-7860</a>
      </p> */}
      <div className='resume__links'>
        <ul>
          <li>
            <a href='mailto:nhanhthu920@gmail.com'>nhanhthu920@gmail.com</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/thuhng24/'>
              linkedin.com/in/thuhng24/
            </a>
          </li>
          <li>657-238-7860</li>
        </ul>
      </div>
      <p>
        A California second-year business administration student seeking an
        internship position in accounting to apply knowledge and to support the
        company’s growth.
      </p>
    </div>
  );
};

export default ResumeHeader;
