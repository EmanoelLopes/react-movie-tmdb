import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Loader } from './styles';


const Loading = () => (
  <Loader>
    <span>Loading...</span>
    <FontAwesomeIcon icon={faSpinner} />
  </Loader>
);

export default Loading;
