import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ContainerContent from './ContentWrapper';
import LanguageSelector from '@/atoms/LanguageSelector';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <header className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <ContainerContent>
        <Link className="logo" href="/" onClick={handleLinkClick}>
          {isSticky ? (
              <Image width={100} height={50} alt="Hazle - logotyp wersja czarna" src="/assets/logo-hazle-black.png" />
            ) : (
              <Image width={100} height={50} alt="Hazle - logotyp wersja biała" src="/assets/logo-hazle-white.png" />
            )}
        </Link>
        <div className="menu">
          <LanguageSelector/>
        </div>
      </ContainerContent>
    </header>
  );
};

export default Header;
