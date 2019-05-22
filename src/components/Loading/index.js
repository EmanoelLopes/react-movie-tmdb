import React from 'react';
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Loader } from './styles';


const Loading = () => (
  <Loader>
    <span>{intl.get('LOADING_MESSAGE')}</span>
    <FontAwesomeIcon icon={faSpinner} />
  </Loader>
);

export default Loading;
