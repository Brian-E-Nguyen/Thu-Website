import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>
        Feel free to contact me for any reason using the form below, or directly
        at <a href='mailto:nhanhthu920@gmail.com'>nhanhthu920@gmail.com</a>. You
        can also{' '}
        <a
          href='https://www.linkedin.com/in/thu-h-nguyen2/'
          target='_blank'
          rel='noreferrer'
        >
          connect with me on LinkedIn
        </a>
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
