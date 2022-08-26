import React from 'react';
import './Footer.css';

import { FaGithubAlt, FaLinkedin } from "react-icons/fa"


const Footer = () => (
  <div className="Footer">
    <p>Created by sedarmek</p>
    <a target="_blank" rel="noreferrer" href='https://www.github.com/sedarmek'><FaGithubAlt className='IconFooter'/></a>
    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/sergio-daniel-arriaga-juarez-7712711b0'><FaLinkedin className='IconFooter'/></a>
  </div>
);

export default Footer;
