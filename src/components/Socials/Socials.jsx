import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div style={containerStyle}>
      <a href="https://instagram.com/rahulpanchal_._" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/rahul-panchal-05610824a/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/rahulpanchal0106" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  margin: '20px 0'
};

const iconStyle = {
  color: '#00ADB5',
  textDecoration: 'none'
};

export default SocialMediaLinks;
