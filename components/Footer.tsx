import React from 'react';
import ContainerContent from './ContentWrapper';
import Link from 'next/link';
import RichText from './RichText';
import useTranslation from '@/lib/useTranslations';

const Footer: React.FC = () => {
  const { translate } = useTranslation();
  
  return (
    <footer>
      <ContainerContent>
          <div className="footer-info-box">
            <div className="footer-left">
              <img src="/assets/logo-hazle-white.png"/>
              <RichText>
                <p>{translate('footer', 'aboutUs')}</p>
              </RichText>
            </div>
            <div className="footer-right">
            <address>
              <ul>
                <li><i className="fa-solid fa-envelope"/><p>hazle-poland@gmail.com</p></li>
                <li><i className="fa-solid fa-phone"/><p>+48 666 666 666</p></li>
                <li className='social-media'>
                  <Link target="_blank" href="https://www.facebook.com/hazle.studio"><i className="fa-brands fa-facebook"/></Link>
                  <Link target="_blank" href="https://www.instagram.com/hazle.pl/"><i className="fa-brands fa-instagram"/></Link>
                  <Link target="_blank" href="https://www.linkedin.com/company/hazle/"><i className="fa-brands fa-linkedin-in"/></Link>
                </li>
              </ul>
            </address>
            </div>
          </div>
          <div className="footer-nav-box">
            <nav>
              <Link href="/portfolio">{translate('footer', 'portfolio')}</Link>
              <Link href="/#services">{translate('footer', 'services')}</Link>
              <Link href="/contact">{translate('footer', 'contact')}</Link>
              <Link href="/#faq">{translate('footer', 'faq')}</Link>
            </nav>
            <div className="copy-box">
              <p>&copy; 2025 Hazle - {translate('footer', 'rights')}</p>
            </div>
          </div>
      </ContainerContent>
    </footer>
  );
};

export default Footer;
