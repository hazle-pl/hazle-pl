import React, { useState, useEffect, useRef } from 'react';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const supportedLanguages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
    { code: 'pl', label: 'Polski' },
    { code: 'ru', label: 'Русский' },
  ];

  useEffect(() => {
    let storedLanguage = localStorage.getItem('language');
    
    if (!storedLanguage) {
      const browserLanguage = navigator.language.split('-')[0];
      const isSupported = supportedLanguages.some(lang => lang.code === browserLanguage);
      storedLanguage = isSupported ? browserLanguage : 'en';
      localStorage.setItem('language', storedLanguage);
    }
    
    setSelectedLanguage(storedLanguage);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    window.location.reload();
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <div 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        tabIndex={0}
        className={isDropdownOpen ? `custom-select open` : `custom-select`}
      >
        <div className="selected-option">
          {selectedLanguage && (
            <img 
              className="country-flag" 
              src={`/img/flags/${selectedLanguage}.svg`} 
              alt={`${selectedLanguage} flag`} 
            />
          )}
          <span className="label">
            {supportedLanguages.find(lang => lang.code === selectedLanguage)?.label || 'Select Language'}
          </span>
          <i className="fa-solid fa-arrow-down" />
        </div>
        {isDropdownOpen && (
          <ul className="options">
            {supportedLanguages.map(({ code, label }) => (
              <li 
                key={code} 
                onClick={() => handleChange(code)} 
                className={code === selectedLanguage ? 'active' : ''}
              >
                <img src={`/img/flags/${code}.svg`} alt={`${label} flag`} />{label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};  

export default LanguageSelector;