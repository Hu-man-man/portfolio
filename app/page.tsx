"use client";

import { useState } from "react";
import Navbar from "./composants/Navbar";
import Skills from "./composants/Skills";
import Image from "next/image";


export default function Home() {
  type Language = "fr" | "an";

  const [lang, setLang] = useState<Language>("fr");
  const [isVertNav, setIsVertNav] = useState<boolean>(false);

  const handleSwitchLanguage = (selectedLang: Language): void => {
    setLang(selectedLang);
  };

  const handleSetIsVertNav = (isVertNav: boolean) => {
    setIsVertNav(isVertNav);
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
      <div className={`flex flex-col`}>
        <Navbar
          lang={lang}
          scrollToSection={scrollToSection}
          handleSwitchLanguage={handleSwitchLanguage}
          sendDataToParent={handleSetIsVertNav}
        />
        <div className={`mainContent flex flex-col w-full items-center justify-center ${isVertNav ? '' : 'transition-all duration-1000 ease-in-out md:pl-20'}`}>
          <section
            id="theMan"
            className="mx-auto min-h-[38rem] md:w-3/4 item-center flex flex-col md:flex-row gap-10 justify-center"
          >
            <div className="flex md:w-1/3 items-center justify-center">
              <Image
                src="/static/images/jason.jpg"
                alt="realy bad picture of Jason"
                width={150}
                height={100}
              />
            </div>
            <div className="flex px-9 md:w-2/3 items-center">
              <p className="text-center md:text-left ">
                {lang === "fr" ? (
                  <>
                    Présentation <br />
                    Accedente ut et et ignobiles et quod et inserunt et ut
                    obscuros adsueti et et quod inserunt venditare quod lucris
                    eruditos inutiles enim venditare inserunt et prandiis
                    accedente mercede infaustos et ignobiles et et accedente
                    obscuros et obscuros et obscuros mercede enim haec adsueti
                    venditare nomenclatores et vitant inutiles vitant.
                  </>
                ) : (
                  <>
                    Apollinares locum nulla Crateras multorum nulla nulla in
                    lapide ambo non Antiochia constaret Crateras in Apollinares
                    per lapide post Antiochia lapide pater per et exilium
                    Crateras pervenissent quae occiduntur in dilatata levius
                    multorum igitur et quae mandatum nulla Apollinares levius
                    nomine filius ad clades et constaret exilium post ambo
                    mandatum fortunas quarto Antiochia."
                  </>
                )}
              </p>
            </div>
          </section>
          <div className="border-2 border-naplesYellow w-full "></div>
          <section
            id="projects"
            className="mx-auto min-h-[38rem] item-center flex flex-col gap-10 justify-center"
          >
            <div className="title">
              Projects: Here are some of my recent projects:
            </div>
            <div className="flex justify-center gap-10">
              <a
                href="https://trello-clone-nu-neon.vercel.app/"
                target="_blank"
                className="hover:scale-110 transition duration-150 ease-in-out"
              >
                <Image
                  src="/static/images/jason.jpg"
                  alt="realy bad picture of Jason"
                  width={150}
                  height={100}
                />
              </a>
              <a
                href="https://trello-clone-nu-neon.vercel.app/"
                target="_blank"
                className="hover:scale-110 transition duration-150 ease-in-out"
              >
                <Image
                  src="/static/images/jason.jpg"
                  alt="realy bad picture of Jason"
                  width={150}
                  height={100}
                />
              </a>
            </div>
          </section>
          <div className="border-2 border-naplesYellow w-full "></div>
          <section
            id="skills"
            className="mx-auto min-h-[38rem] md:w-5/6 item-center flex flex-col md:flex-row gap-10 justify-center"
          >
            <Skills lang={lang} />
          </section>
          <div className="border-2 border-naplesYellow w-full "></div>
          <section
            id="experiences"
            className="mx-auto min-h-[38rem] md:w-5/6 item-center flex flex-col md:flex-row gap-10 justify-center"
          >
            <Skills lang={lang} />
          </section>
        </div>
      </div>
    </main>
  );
}
