import React from 'react';

const languages = [
  {value: 'none', name: '--- Languages ---'},
  {value: 'pt-BR', name: 'Português (BR)'},
  {value: 'es-ES', name: 'Español'},
  {value: 'en-US', name: 'English'},
];

const defaultLanguage = localStorage.getItem('current_language');

const SelectLanguage = () => {
  const setCurrentLanguage = event => {
    localStorage.setItem('current_language', event.target.value);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <select
      defaultValue={defaultLanguage}
      onChange={setCurrentLanguage}>
      {
        languages.map((lang, index) => {
          return (
            <option
              disabled={index === 0}
              key={index}
              value={lang.value}>
              {lang.name}
            </option>
          );
        })
      }
    </select>
  );
};

export default SelectLanguage;
