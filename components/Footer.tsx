import React from 'react';
import ContainerContent from './ContentWrapper';
import Link from 'next/link';
import RichText from './RichText';

const Footer: React.FC = () => {
  return (
    <footer>
      <ContainerContent>
          <div className="footer-info-box">
            <div className="footer-left">
              <img src="/assets/logo-hazle-white.png"/>
              <RichText>
                <p>Jesteśmy agencją interaktywną, 
                  która tworzy strony, aplikacje webowe, 
                  grafikę i kampanie marketingowe, pomagając 
                  firmom wyróżnić się w sieci.</p>
              </RichText>
            </div>
            <div className="footer-right">
            <address>
              <ul>
                <li>email: hazle-poland@gmail.com</li>
                <li>tel: hazle-poland@gmail.com</li>
                <li className='social-media'><a href="">Facebook</a><a href="">Instagram</a><a href="">LinkedIn</a></li>
              </ul>
            </address>
            </div>
          </div>
          <div className="footer-nav-box">
            <nav>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/#services">Usługi</Link>
              <Link href="/Kontakt">Kontakt</Link>
              <Link href="/#faq">FAQ</Link>
            </nav>
            <div className="copy-box">
              <p>&copy; 2025 Hazle - Wszelkie prawa zastrzeżone</p>
            </div>
          </div>
      </ContainerContent>
    </footer>
  );
};

export default Footer;
