"use client";

import { useState } from "react";
import Navbar from "./composants/Navbar";
import HomePage from "./composants/HomePage";
import Projects from "./composants/Projects";
import Skills from "./composants/Skills";
import Contacts from "./composants/Contacts";


export default function Home() {
  type Language = "fr" | "an";

  const [lang, setLang] = useState<Language>("fr");
  const [isVisibleNav, setIsVisibleNav] = useState<boolean>(false);

  const handleSwitchLanguage = (selectedLang: Language): void => {
    setLang(selectedLang);
  };

  const handleSetIsVisibleNav = (isVisibleNav: boolean) => {
    setIsVisibleNav(isVisibleNav);
  };

  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <main>
      <div>
        
        <Navbar
          lang={lang}
          scrollToSection={scrollToSection}
          handleSwitchLanguage={handleSwitchLanguage}
          sendDataToParent={handleSetIsVisibleNav}
        />
        <div className={`mainContent flex flex-col w-full items-center justify-center`}>
          <section
            className="mx-auto min-h-[38rem] md:w-3/4 item-center flex flex-col md:flex-row gap-10 justify-center pt-20"
            id="homePage"
          >
            <HomePage lang={lang} scrollToSection={scrollToSection} />
          </section>
          <div className="border-2 w-full m-5"></div>
          <section
            id="skills"
            className="mx-auto min-h-[38rem]  item-center flex flex-col md:w-5/6 md:flex-row gap-10 justify-center pt-20"
          >
            <Skills lang={lang} />
          </section>
          <div className="border-2 w-full m-5"></div>
          <section
            id="projects"
            className="mx-auto min-h-[38rem] item-center flex flex-col gap-10 md:w-5/6 justify-center pt-20"
          >
            <Projects lang={lang} scrollToSection={scrollToSection} />
          </section>
          <div className="border-2 w-full m-5"></div>
          <section
            id="contacts"
            className="mx-auto min-h-[38rem] md:w-5/6 item-center flex flex-col md:flex-row gap-10 justify-center pt-20"
          >
            <Contacts lang={lang} scrollToSection={scrollToSection} />
          </section>
        </div>
      </div>
    </main>
  );
}
