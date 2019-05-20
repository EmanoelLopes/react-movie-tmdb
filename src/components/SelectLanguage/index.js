import React from 'react';

const SelectLanguage = () => {
  const setCurrentLanguage = event => {
    localStorage.setItem('current_language', event.target.value);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <select onChange={setCurrentLanguage}>
      <option defaultValue="">Alterar idioma</option>
      <option value="pt-BR">Português (BR)</option>
      <option value="es-ES">Español</option>
      <option value="en-US">English</option>
    </select>
  );
};

export default SelectLanguage;
