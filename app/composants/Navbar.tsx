import React, { useState, useEffect } from "react";

type NavbarProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
  handleSwitchLanguage: (selectedLang: "fr" | "an") => void;
  sendDataToParent: (isVertical: boolean) => void;
};

const Navbar = ({
  lang,
  scrollToSection,
  handleSwitchLanguage,
  sendDataToParent,
}: NavbarProps) => {
  const [isVerticalNav, setIsVerticalNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVerticalNav(window.scrollY <= 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    sendDataToParent(isVerticalNav);
  }, [isVerticalNav, sendDataToParent]);

  const smoothEffect = "hover:-translate-y-0.5 transition ease-in-out duration-50";

  const renderSectionLink = (sectionId: string, textFr: string, textEn: string, iconClass: string) => {
    return (
      <span onClick={() => scrollToSection(sectionId)} className={`cursor-pointer mr-3 ${smoothEffect}`}>
        {isVerticalNav ? (
          <span>{lang === "fr" ? textFr : textEn}</span>
        ) : (
          <i className={`fi ${iconClass} text-white text-3xl`}></i>
        )}
      </span>
    );
  };

  const changeLanguage = (selectedLang: "fr" | "an") => {
    if (lang !== selectedLang) {
      handleSwitchLanguage(selectedLang);
    }
  };

  return (
    <nav
      className={`fixed flex justify-between p-3 font-bold uppercase w-full ${
        isVerticalNav
          ? "bg-white text-gray-800"
          : "bg-gray-700/95 text-white md:flex-col md:w-auto md:h-full transition-all duration-1000 ease-in-out"
      }`}
    >
      <span
        className={`cursor-pointer ${smoothEffect}`}
        onClick={() => scrollToSection("top")}
      >
        logo
      </span>
      <div className={`anchorTagContainer flex ${isVerticalNav ? "" : "w-18 flex-col"}`}>
        <div>{renderSectionLink("projects", "projets", "projects", "fi-rr-apps")}</div>
        <div>{renderSectionLink("skills", "compétences", "skills", "fi-rr-settings")}</div>
        <div>{renderSectionLink("top", "expériences", "experiences", "fi-rr-build-alt")}</div>
      </div>
      <div className={smoothEffect}>
        <span onClick={() => changeLanguage("fr")} className={lang === "an" ? "cursor-pointer font-light" : "cursor-default"}>
          FR
        </span>
        <span className="cursor-default">/</span>
        <span onClick={() => changeLanguage("an")} className={lang === "fr" ? "cursor-pointer font-light" : "cursor-default"}>
          EN
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
