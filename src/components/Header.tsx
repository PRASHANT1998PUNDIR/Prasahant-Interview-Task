import { FC } from "react";

import React, { useState } from "react";



const Header:FC = () => {
  // const { t: _ } = useTranslation();
  // const handleChangeLang = () => {
  //   const lang = i18n.language === "en" ? "cy" : "en";
  //   i18n.changeLanguage(lang);
  // };

  
  const [language, setLanguage] = useState('en');
  const handleLanguageSwitch = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };


  return (
    <nav className="navbar navabar-light bg-light">
      <div className="container">
      <h1>{language === 'en' ? "english" : "french"}</h1>
        <button
          aria-labelledby="sr-lang-btn"
          className="btn btn-secondary"
          onClick={handleLanguageSwitch}
        >
        Switch language
        </button>
      </div>
    </nav>
  );
};
export default Header;
