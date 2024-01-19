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
      <Image
        src={isHovered ? hoverSrc : defaultSrc}
        alt="Contact Icon"
        width={100}
        height={100}
      />
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
        className={`cursor-pointer tracking-tighter text-5xl font-bold uppercase hover:text-[#ED7D3A]`}
        onClick={() => scrollToSection("homePage")}
      >
        {"jsn"}
      </a>
      <div className="flex items-center justify-center gap-5 mx-12">
        <ContactIcon
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
        />
        <ContactIcon
          defaultSrc="/static/images/cv.png"
          hoverSrc="/static/images/cv-hover.png"
        />
      </div>
    </div>
  );
};

export default Contacts;

