import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>
        Feel free to contact me for any reason using the form below, or directly
        at <a href='mailto:nhanhthu920@gmail.com'>nhanhthu920@gmail.com</a>
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
