import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/4910247Xro' },
    { icon: faFacebook, url: 'https://www.facebook.com/profile.php?id=100084939434004' },
  ];

  return (
    <div className="footer">
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} />
        
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;