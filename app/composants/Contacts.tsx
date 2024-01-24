// import PersonnalisedButton from "./PersonnalisedButton";

// type ContactsProps = {
//   lang: "fr" | "an";
//   scrollToSection: (id: string) => void;
// };

// const Contacts: React.FC<ContactsProps> = ({ lang, scrollToSection }) => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-16">
//       <a
//         className={`cursor-pointer tracking-tighter text-5xl font-bold uppercase hover:text-[#ED7D3A] major hover:-translate-y-0.5 transition ease-in-out duration-50`}
//         onClick={() => scrollToSection("Hero")}
//       >
//         {"jsn"}
//       </a>
//       <div className="flex  flex-wrap items-center justify-center gap-7 px-12 cursor-pointer text-5xl md:text-7xl">
//         <a
//           href="https://www.linkedin.com/in/jason-ricou/"
//           target="_blank"
//         >
//           <PersonnalisedButton
//           buttonText={<i className="fi fi-brands-linkedin text-gray-600"></i>}
//         />
//         </a>
//         <a
//           href="https://github.com/Hu-man-man"
//           target="_blank"
//         >
//           <PersonnalisedButton
//           buttonText={<i className="fi fi-brands-github text-gray-600"></i>}
//         />
//         </a>
//         <a
//           href="mailto:jason.ricou@gmail.com"
//         >
//           <PersonnalisedButton
//           buttonText={<i className="fi fi-sr-envelope text-gray-600"></i>}
//         />
//         </a>
//         <a
//           href="CV2024Alt.pdf"
//           download="Jason-Ricou-cv.pdf"
//         >
//           <PersonnalisedButton
//           buttonText={<i className="fi fi-sr-file-user text-gray-600"></i>}
//         />
//         </a>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import PersonnalisedButton from './PersonnalisedButton';

type ContactsProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

const Contacts: React.FC<ContactsProps> = ({ lang, scrollToSection }) => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = (action: () => void) => {
    if (!isButtonClicked) {
      setButtonClicked(true);

      setTimeout(() => {
        action();
        setButtonClicked(false);
      }, 200);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div
        className={`cursor-pointer tracking-tighter text-5xl font-bold uppercase hover:text-[#ED7D3A] major hover:-translate-y-0.5 transition ease-in-out duration-50`}
        onClick={() => scrollToSection("Hero")}
      >
        {"jsn"}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-7 px-12 *:cursor-pointer text-5xl md:text-7xl *:my-4">
        <div onClick={() => handleButtonClick(() => window.open("https://www.linkedin.com/in/jason-ricou/", "_blank"))}>
          <PersonnalisedButton buttonText={<i className="fi fi-brands-linkedin text-gray-600"></i>} />
        </div>
        <div onClick={() => handleButtonClick(() => window.open("https://github.com/Hu-man-man", "_blank"))}>
          <PersonnalisedButton buttonText={<i className="fi fi-brands-github text-gray-600"></i>} />
        </div>
        <div onClick={() => handleButtonClick(() => window.location.href = "mailto:jason.ricou@gmail.com")}>
          <PersonnalisedButton buttonText={<i className="fi fi-sr-envelope text-gray-600"></i>} />
        </div>
        <div onClick={() => handleButtonClick(() => window.open("/static/CV2024Alt.pdf", "_blank"))}>
          <PersonnalisedButton buttonText={<i className="fi fi-sr-file-user text-gray-600"></i>} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
