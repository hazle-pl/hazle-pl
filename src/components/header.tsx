'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

interface Option {
  code: string;
  name: string;
  flag: string;
}

const CustomSelect = ({ options, defaultValue, onChange }: { options: Option[], defaultValue: Option, onChange: (option: Option) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(defaultValue);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const ref = useRef<HTMLDivElement>(null);

  const { inView } = useInView({
    threshold: 0,
  } as IntersectionOptions);

  useEffect(() => {
    const closeSelect = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeSelect);

    return () => {
      document.removeEventListener('click', closeSelect);
    };
  }, [ref]);

  return (
    <div ref={ref} className={`select ${isOpen ? 'open' : ''} ${inView ? 'inView' : ''}`}>
      <div className="selected-option" onClick={toggleSelect}>
        <img src={selectedOption.flag} alt={selectedOption.name} className="selected-flag" />
      </div>
      <ul className="options">
        {options.map((option) => (
          <li key={option.code} onClick={() => handleOptionClick(option)}>
            <img src={option.flag} alt={option.name} className="option-flag" />
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const currentLanguage = window.location.pathname.split('/')[1];
      return currentLanguage || 'pl-PL';
    }
    return 'pl-PL';
  });  

  const languages: Option[] = [
    { code: 'pl-PL', name: 'Polski', flag: '../img/flag/pl.svg' },
    { code: 'en-GB', name: 'English British', flag: '../img/flag/gb.svg' },
    { code: 'uk-UA', name: 'Українська', flag: '../img/flag/ua.svg' },
    { code: 'de-DE', name: 'Deutsch', flag: '../img/flag/de.svg' },
    { code: 'sk-SK', name: 'Slovenský', flag: '../img/flag/sk.svg' },
    { code: 'fr-FR', name: 'Français', flag: '../img/flag/fr.svg' },
    { code: 'no-NO', name: 'Norsk', flag: '../img/flag/no.svg' },
    { code: 'es-ES', name: 'Español', flag: '../img/flag/es.svg' },
    { code: 'en-US', name: 'English American', flag: '../img/flag/us.svg' },
  ];

  const languageUrls: { [key: string]: string } = {
    'pl-PL': '/pl-PL',
    'en-GB': '/en-GB',
    'uk-UA': '/uk-UA',
    'de-DE': '/de-DE',
    'sk-SK': '/sk-SK',
    'fr-FR': '/fr-FR',
    'no-NO': '/no-NO',
    'es-ES': '/es-ES',
    'en-US': '/en-US',
  };

  const menuLabels: { [key: string]: { home: string, about: string, contact: string, terms: string } } = {
    'pl-PL': {
      home: 'Strona Główna',
      about: 'O Nas',
      contact: 'Kontakt',
      terms: 'Regulamin'
    },
    'en-GB': {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      terms: 'Terms & Conditions'
    },
    'en-US': {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      terms: 'Terms & Conditions'
    },
    'fr-FR': {
      home: 'Accueil',
      about: 'À Propos',
      contact: 'Contact',
      terms: 'Conditions Générales'
    },
    'no-NO': {
      home: 'Hjem',
      about: 'Om Oss',
      contact: 'Kontakt',
      terms: 'Vilkår'
    },
    'sk-SK': {
      home: 'Domov',
      about: 'O Nás',
      contact: 'Kontakt',
      terms: 'Podmienky'
    },
    'uk-UA': {
      home: 'Головна',
      about: 'Про Нас',
      contact: 'Контакти',
      terms: 'Умови'
    },
    'de-DE': {
      home: 'Startseite',
      about: 'Über Uns',
      contact: 'Kontakt',
      terms: 'AGB'
    },
    'es-ES': {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      terms: 'Términos y Condiciones'
    }
  };

  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    useEffect(() => {
      let prevScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

      const handleScroll = () => {
        const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

        if (currentScrollY > prevScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }

        prevScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  const handleLanguageChange = (selectedLang: string) => {
    setSelectedLanguage(selectedLang);
    window.location.href = languageUrls[selectedLang];
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = typeof window !== 'undefined' ? window.scrollY || document.documentElement.scrollTop : 0;
      setIsHeaderFixed(scrollPosition > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const defaultLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  return (
    <header ref={ref} className={` ${isHeaderFixed ? 'fixed' : ''} ${inView ? 'visible' : 'not-visible'} ${isNavOpen ? 'open' : ''} scroll-${scrollDirection}`}>
        {/* <div className="utility-bar">
          <div className="content-container">
            <div className='country'>
              <CustomSelect
                options={languages}
                defaultValue={defaultLanguage}
                onChange={(option) => handleLanguageChange(option.code)}
              />
            </div>
          </div>
        </div> */}
        <div className="content-container">
        <a className="logo" href={languageUrls[selectedLanguage]}>
        {isNavOpen ? <img src="../img/hazle-logo-white.svg" alt="Hazle white logo" /> : <img src="../img/hazle-logo.svg" alt="Hazle black logo" />}</a>
        <div className={`burger  ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
          <span />
        </div>
      </div>
      <div className={`menu ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} href={`${languageUrls[selectedLanguage]}#top`}>home</a></li>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} href={`${languageUrls[selectedLanguage]}#about`}>about</a></li>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} href={`${languageUrls[selectedLanguage]}#contact`}>contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
