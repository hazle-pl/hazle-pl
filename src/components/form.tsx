import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import Notification from './notification';

interface FormProps {
  language?: string;
}

const Form: React.FC<FormProps> = ({ language = 'gb' }) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'mail':
        setMail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'smtp.hostinger.com',
        'test432',
        e.currentTarget,
        '8N61LmIyr4J7p_yW6'
      );

      console.log('Form submission successful');
      setName('');
      setMail('');
      setMessage('');
      setNotification('Email sent successfully!');
      setNotificationVisible(true);
      setTimeout(() => {
        setNotificationVisible(false);
      }, 5000); // Hide notification after 5 seconds
    } catch (error) {
      console.error('Form submission error:', error);
      setNotification('Error sending email. Please try again later.');
      setNotificationVisible(true);
      setTimeout(() => {
        setNotificationVisible(false);
      }, 5000); // Hide notification after 5 seconds
    }
  };

  return (
    <div>
      <form
        ref={ref}
        className={`${inView ? 'visible' : 'not-visible'}`}
        onSubmit={handleSubmit}
      >
        <div className="form-inputs">
          <div className="label">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className={name ? 'not-empty' : ''}
            />
            <span>{language === 'pl' ? 'Imię' : 'Name'}</span>
          </div>
          <div className="label">
            <input
              type="text"
              name="mail"
              value={mail}
              onChange={handleInputChange}
              className={mail ? 'not-empty' : ''}
            />
            <span>{language === 'pl' ? 'Email' : 'Mail'}</span>
          </div>
          <div className="label">
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              className={message ? 'not-empty message' : 'message'}
            />
            <span>{language === 'pl' ? 'Wiadomość' : 'Message'}</span>
          </div>
        </div>
        <button className="primary-btn" type="submit">
          {language === 'pl' ? 'Wyślij' : 'Submit'}
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>
      <Notification message={notification} />
    </div>
  );
};

export default Form;
