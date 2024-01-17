import React, { useState, useEffect } from "react";

type NavbarProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
  handleSwitchLanguage: (selectedLang: "fr" | "an") => void;
  sendDataToParent: (isVisible: boolean) => void;
};

const Navbar = ({
  lang,
  scrollToSection,
  handleSwitchLanguage,
  sendDataToParent,
}: NavbarProps) => {
  const [isVerticalNav, setIsVerticalNav] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVerticalNav(window.scrollY <= 10);

      // Récupérer toutes les sections
      const sections = document.querySelectorAll("section");
      // Parcourir les sections pour vérifier quelle est visible
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 10;
        const sectionBottom = sectionTop + section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    sendDataToParent(isVisible);
  }, [isVisible, sendDataToParent]);

  

  const smoothEffect =
    "hover:-translate-y-0.5 transition ease-in-out duration-50";

  const renderSectionLink = (
    sectionId: string,
    textFr: string,
    textEn: string
  ) => {
    return (
      <span
        onClick={() => scrollToSection(sectionId)}
        className={`cursor-pointer mr-3 ${
          activeSection === sectionId
            ? "text-[#ED7D3A]"
            : "text-gray-600"
        }`}
      >
        {lang === "fr" ? textFr : textEn}
      </span>
    );
  };

  const AnchorTagContainer = () => (
    <>
      <div
        className={`flex flex-col gap-5 md:flex-row`}
      >
        <div className={smoothEffect}>
          {renderSectionLink("skills", "compétences", "skills")}
        </div>
        <div className={smoothEffect}>
          {renderSectionLink("projects", "projets", "projects")}
        </div>
        <div className={smoothEffect}>
          {renderSectionLink("experiences", "expériences", "experiences")}
        </div>
        <div className={smoothEffect}>
          {renderSectionLink("contacts", "contacts", "contacts")}
        </div>
      </div>
    </>
  );

  const changeLanguage = (selectedLang: "fr" | "an") => {
    if (lang !== selectedLang) {
      handleSwitchLanguage(selectedLang);
    }
  };

  const handleIsVisible = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed w-full z-10">
      <nav
        className={`flex justify-between p-4 font-bold uppercase bg-gray-800/5 backdrop-blur-md ${
          !isVisible && isVerticalNav ? "" : "bg-mintGreen/85 shadow "
        }w-full text-black `}
      >
        <span
          className={`cursor-pointer ${smoothEffect} pl-1 tracking-tighter text-2xl ${
            activeSection === "theMan" ? "text-[#ED7D3A]" : ""
          }
          `}
          onClick={() => scrollToSection("theMan")}
        >
          {"jsn"}
        </span>
        <div className={`hidden md:flex`}>
          <AnchorTagContainer />
        </div>
        <div className={smoothEffect}>
          <span
            onClick={() => changeLanguage("fr")}
            className={
              lang === "an" ? "cursor-pointer font-light" : "cursor-default"
            }
          >
            FR
          </span>
          <span className="cursor-default">/</span>
          <span
            onClick={() => changeLanguage("an")}
            className={
              lang === "fr" ? "cursor-pointer font-light" : "cursor-default"
            }
          >
            EN
          </span>
        </div>
        <span className="md:hidden origin-center rotate-90 text-2xl">
          <i
            className={
              isVisible ? "fi fi-rr-cross text-[#ED7D3A]" : "fi fi-rr-tally-4"
            }
            onClick={handleIsVisible}
          ></i>
        </span>
      </nav>
      <div
        className={`fixed right-0 flex flex-col text-right font-bold uppercase backdrop-blur-md bg-mintGreen/85 shadow text-white h-auto w-auto md:hidden transition-all duration-50 ease-in-out ${
          activeSection !== "theMan" ? "" : "text-gray-600 "
        } ${isVisible ? "p-3 py-7" : ""}`}
      >
        {/*isVisible &&*/ <AnchorTagContainer />}
      </div>
    </div>
  );
};

export default Navbar;
