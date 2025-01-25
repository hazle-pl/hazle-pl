import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ContainerContent from './ContentWrapper';

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
              <img alt="logo" src="/assets/logo-hazle-black.png" />
            ) : (
              <img alt="logo" src="/assets/logo-hazle-white.png" />
            )}
        </Link>
        <div className="menu">
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`level-1 ${isMenuOpen ? 'open' : ''}`}>
            <div className="nav-element">
              <Link href="/" onClick={handleLinkClick}>Podstrona 1</Link>
            </div>
            <div className="nav-element has-child" onClick={toggleSubMenu}>
              <Link href="/" onClick={handleLinkClick}>Podstrona 2 <i className={`fa-solid fa-chevron-down ${isSubMenuOpen ? 'open' : ''}`}/></Link>
              {isSubMenuOpen && (
                <nav className={`level-2 ${isSubMenuOpen ? 'open' : ''}`}>
                  <div className="nav-element">
                    <Link href="/" onClick={handleLinkClick}>Podstrona 4</Link>
                  </div>
                  <div className="nav-element">
                    <Link href="/" onClick={handleLinkClick}>Podstrona 5</Link>
                  </div>
                </nav>
              )}
            </div>
            <div className="nav-element">
              <Link href="/" onClick={handleLinkClick}>Podstrona 3</Link>
            </div>
          </nav>
        </div>
      </ContainerContent>
    </header>
  );
};

export default Header;
