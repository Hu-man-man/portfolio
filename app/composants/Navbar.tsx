'use client'

import { useState, useEffect } from "react";

type NavbarProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
  handleSwitchLanguage: (selectedLang: "fr" | "an") => void;
};


const Navbar = ({ lang, scrollToSection, handleSwitchLanguage, }: NavbarProps) => {

  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 0);
      console.log(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothEffect = 'hover:-translate-y-0.5 transition ease-in-out duration-50'

  return (
    <nav
    className={`fixed w-full flex justify-between p-3 ${isVisible ? 'bg-white text-gray-800' : 'bg-gray-700/95 text-white'} font-bold uppercase`}
      >
      <span className={`cursor-pointer ${smoothEffect}`} onClick={() => scrollToSection("top")}>
        logo
      </span>
      <div className="anchorTagContainer flex">
        <div className={smoothEffect}>
          <span
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer mr-3"
          >
            {lang === "fr" ? "projets" : "projects"}
          </span>
        </div>
        <div className={smoothEffect}>
          <span
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer mr-3"
          >
            {lang === "fr" ? "compétences" : "skills"}
          </span>
        </div>
        <div className={smoothEffect}>
          <span
            onClick={() => scrollToSection("top")}
            className="cursor-pointer"
          >
            {lang === "fr" ? "expériences" : "experiences"}
          </span>
        </div>
      </div>
      <div className={smoothEffect}>
        <span
          onClick={() => lang === "an" ? handleSwitchLanguage("fr") : null}
          className={lang === "an" ? 'cursor-pointer font-light': 'cursor-default'}
        >
          FR
        </span>
        <span className='cursor-default'>/</span>
        <span
        onClick={() => (lang === "fr" ? handleSwitchLanguage("an") : null)}
        className={lang === "fr" ? 'cursor-pointer font-light': 'cursor-default'}
        >
        EN
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
