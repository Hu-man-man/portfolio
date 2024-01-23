import React, { useState } from "react";
import Image from "next/image";

type ContactIconProps = {
  defaultSrc: string;
  hoverSrc: string;
};

const ContactIcon: React.FC<ContactIconProps> = ({ defaultSrc, hoverSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="../../public/static/CV2024Alt.pdf" download="Jason-Ricou-cv.pdf" >
        <Image
          src={isHovered ? hoverSrc : defaultSrc}
          alt="Contact Icon"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
};

type ContactsProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

const Contacts: React.FC<ContactsProps> = ({ lang, scrollToSection }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <a
        className={`cursor-pointer tracking-tighter text-5xl font-bold uppercase hover:text-[#ED7D3A] major hover:-translate-y-0.5 transition ease-in-out duration-50`}
        onClick={() => scrollToSection("Hero")}
      >
        {"jsn"}
      </a>
      <div className="flex items-center justify-center gap-5 mx-12 cursor-pointer">
        {/* <ContactIcon
          defaultSrc="/static/images/linkedin.png"
          hoverSrc="/static/images/linkedin-hover.png"
        />
        <ContactIcon
          defaultSrc="/static/images/github.png"
          hoverSrc="/static/images/github-hover.png"
        />
        <ContactIcon
          defaultSrc="/static/images/email.png"
          hoverSrc="/static/images/email-hover.png"
        />*/}
        <a className="relative fa-brands fa-linkedin text-8xl text-black hover:text-[#ED7D3A] " href='https://www.linkedin.com/in/jason-ricou/' target="_blank" ></a>
        <a className="fa-brands fa-github text-8xl text-black hover:text-[#ED7D3A]" href='https://github.com/Hu-man-man' target="_blank" ></a>
        <a className="fa-solid fa-envelope text-8xl text-black hover:text-[#ED7D3A]" href="mailto:jason.ricou@gmail.com"></a>
        <ContactIcon
          defaultSrc="/static/images/cv.png"
          hoverSrc="/static/images/cv-hover.png"
        /> 
        
      </div>
    </div>
  );
};

export default Contacts;

