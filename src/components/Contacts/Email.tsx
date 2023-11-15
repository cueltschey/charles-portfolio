import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'
const Email = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(form.current) emailjs.sendForm('service_tv0lq4r', 'template_kmvbo19', form.current, '6UOrP3WJiSDj-r5Pp')
      .then((result) => {
          console.log(result.text);
          form.current?.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className='emailbut'/>
    </form>
  );
};

export default Email
