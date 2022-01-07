import emailjs from 'emailjs-com';

export const submitForm = (event) => {
  emailjs.sendForm(
    'service_uwyem9w',
    'template_cz9q9r7',
    event.target,
    'user_4vVpxSkvODPvEMWOc492H'
  );
  event.target.reset();
};
