import React from 'react';
import './NotePage.css';

import NoteBody from '../../components/containers/NoteBody/NoteBody';
import Footer from '../../components/Footer/Footer'

const NotePage = () => (
  <div className="NotePage">
    <NoteBody/>
    <Footer/>
  </div>
);

export default NotePage;
