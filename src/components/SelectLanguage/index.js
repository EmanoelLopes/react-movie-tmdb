import React from 'react';
import intl from 'react-intl-universal';

const languages = [
  {value: 'none', name: ''},
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
      aria-label={intl.get('SUBHEADER.CHOOSE_LANGUAGE')}
      defaultValue={defaultLanguage}
      onChange={setCurrentLanguage}>
      {
        languages.map((lang, index) => {
          return (
            <option
              disabled={index === 0}
              key={index}
              value={lang.value}>
              {(index === 0) ? intl.get('SUBHEADER.CHOOSE_LANGUAGE') : lang.name}
            </option>
          );
        })
      }
    </select>
  );
};

export default SelectLanguage;
