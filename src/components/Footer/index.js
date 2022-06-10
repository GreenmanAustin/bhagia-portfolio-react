import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer () {
    const gitLink = "https://github.com/GreenmanAustin";
    const linkedinLink = "https://www.linkedin.com/in/sheroo-bhagia-5676b78/"
    const twitterLink = "https://twitter.com/SherooBhagia"
    
    return (
        <footer className="footerSection">
          <a href={gitLink}
                  target="_blank" rel="noopener noreferrer" className="footerIcons">
                  <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={linkedinLink}
                  target="_blank" rel="noopener noreferrer" className="footerIcons">
                  <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={twitterLink}
                  target="_blank" rel="noopener noreferrer" className="footerIcons">
                  <FontAwesomeIcon icon={faTwitter} />
            </a>

        </footer>
        );
}

export default Footer;