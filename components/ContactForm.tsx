import { CustomInput, CustomTextarea } from '@/atoms/CustomInputs';
import { useState } from 'react';
import RichText from './RichText';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Błąd wysyłania wiadomości');

      setFormData({ name: '', email: '', message: '' });
      setSuccess(true);
    } catch (err) {
      setError('Nie udało się wysłać wiadomości');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <RichText>
        <h1>Skontaktuj się z nami</h1>
        <p>Masz pytania lub potrzebujesz wyceny? Skontaktuj się z nami – chętnie doradzimy i pomożemy znaleźć najlepsze rozwiązanie. Odpowiemy najszybciej, jak to możliwe!</p>
      </RichText>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <CustomInput label="Imię" name="name" value={formData.name} onChange={handleChange} />
          <CustomInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <CustomTextarea label="Treść wiadomości" name="message" value={formData.message} onChange={handleChange} />
        <button type="submit" disabled={loading}>
          {loading ? (
            'Wysyłanie...'
          ) : (
            <>
              Wyślij wiadomość <i className="fa-solid fa-arrow-right"/>
            </>
          )}
        </button>
      </form>
      {success && <p>Wiadomość wysłana pomyślnie!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ContactForm;