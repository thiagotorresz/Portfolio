import React, { useState, useRef } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { i18n } from '../locale/i18n';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Select from 'react-select';
import ReactFlagsSelect from 'react-world-flags'; // Usando o pacote correto

const countries = [
  { value: '+55', code: 'BR' },
  { value: '+1', code: 'US' },
  { value: '+44', code: 'GB' },
  { value: '+33', code: 'FR' },
  { value: '+49', code: 'DE' },
  { value: '+91', code: 'IN' },
  { value: '+81', code: 'JP' },
  { value: '+86', code: 'CN' },
  { value: '+52', code: 'MX' },
  { value: '+00', code: '' },
];

const Contact = () => {
  const form = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Concatena o código do país ao número e insere no campo do formulário
    const phoneInput = form.current.querySelector('input[name="user_phone"]');
    phoneInput.value = `${selectedCountry.value}${phoneNumber}`;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          e.target.reset();
          toast.success('Obrigado pelo contato! Seu lead foi enviado com sucesso.', {
            duration: 5000,
          });
          setPhoneNumber(''); // Reseta o número de telefone localmente
        },
        (error) => {
          toast.error('Erro ao enviar o formulário. Tente novamente mais tarde.', {
            duration: 5000,
          });
          console.error('Erro ao enviar e-mail:', error);
        },
      );
  };

  return (
    <section className="w-full pb-5 md:pb-9 pt-12 md:pt-24" name="contact">
      <div className="max-w-[900px] mx-auto px-8">
        <h1 className="font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1">
          {i18n.t('contactSection.sectionName')}
        </h1>
        <p className="text-base 2xl:text-lg">{i18n.t('contactSection.intro')}</p>
        <form
          className="flex flex-col w-full max-w-[600px] mx-auto pt-12"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="p-2 2xl:p-2.5 rounded-sm bg-theme-white text-theme-black text-lg outline-none"
            type="text"
            placeholder={`${i18n.t('contactSection.placeholders.placeholderName')}`}
            name="user_name"
            required
          />
          <input
            className="p-2 2xl:p-2.5 my-3 md:my-4 rounded-sm bg-theme-white text-theme-black text-lg outline-none"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <div className="flex items-center mb-4">
            <Select
              options={countries.map((country) => ({
                value: country.value,
                label: (
                  <div className="flex items-center">
                    <ReactFlagsSelect code={country.code} className="w-4 h-4" />
                    <span className='text-xs'>{country.label} ({country.value})</span>
                  </div>
                ),
              }))}
              value={{
                value: selectedCountry.value,
                label: (
                  <div className="flex items-center">
                    <ReactFlagsSelect code={selectedCountry.code} className="w-6 h-5 mr-2" />
                    <span className='text-xs'>{selectedCountry.label} ({selectedCountry.value})</span>
                  </div>
                ),
              }}
              onChange={(option) =>
                handleCountryChange(countries.find((c) => c.value === option.value))
              }
              className="w-[23%] text-theme-black pr-2"
              classNamePrefix="select"
            />
            <input
              className="flex-1 p-1.5 rounded-lg bg-theme-white text-theme-black text-lg outline-none"
              type="tel"
              placeholder="Número de telefone"
              name="user_phone"
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <textarea
            className="rounded-sm bg-theme-white p-2 2xl:p-4 text-theme-black text-lg outline-none"
            name="message"
            placeholder={`${i18n.t('contactSection.placeholders.placeholderMessage')}`}
            rows="6"
            required
          />
          <button
            type="submit"
            className="h-12 md:h-auto py-[4px] 2xl:py-1.5 px-3 flex items-center justify-center cursor-pointer hover:text-white active:text-white duration-200 bg-green-700 hover:bg-green-500 active:bg-green-600 rounded text-lg mt-3 md:mt-5 mx-auto font-medium"
          >
            {i18n.t('contactSection.button')} <RiSendPlaneFill className="ml-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
