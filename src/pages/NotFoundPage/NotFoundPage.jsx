import React from 'react';
import './NotFoundPage.css';

import { FaTimesCircle } from 'react-icons/fa'

const NotFoundPage = () => (
  <div className="NotFoundPage">
    <FaTimesCircle className='icon404'/>
    <h1>Page is not found.</h1>
  </div>
);

export default NotFoundPage;
