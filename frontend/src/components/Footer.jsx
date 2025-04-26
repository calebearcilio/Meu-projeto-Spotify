import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer__content">
        <div className="footer__social-media">
          <h4>Para mais informações:</h4>
          <div className="footer__social-links">
            <a href="https://github.com/calebearcilio/Meu-projeto-Spotify" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FontAwesomeIcon className='footer__social-icon' icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/calebe-arcilio-de-sousa-394539332/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <FontAwesomeIcon className='footer__social-icon' icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer__contact">
          <h4 className='email'>Contato</h4>
          <a href="mailto:calebearcilio@gmail.com"><p>calebearcilio@gmail.com</p></a>
        </div>

      </div>
      <div className="footer__copyright">
        <p>Este projeto não está associado ao Spotify e é apenas para fins educacionais.</p>
        <p>&copy; 2025 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
