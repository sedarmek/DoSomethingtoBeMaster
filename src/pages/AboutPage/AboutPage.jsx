import React from 'react';
import PropTypes from 'prop-types';
import './AboutPage.css';
import Footer from '../../components/Footer/Footer';
import AboutDescription from '../../components/pures/AboutDescription/AboutDescription'

const AboutPage = () => (
  <div className="AboutPage">
    <AboutDescription/>
    <Footer/>
  </div>
);

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
