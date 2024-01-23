import Image from "next/image";
import PersonnalisedButton from "./PersonnalisedButton";

type HeroProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

const Hero = ({ lang, scrollToSection }: HeroProps) => {
  return (
    <>
      <div className="flex md:w-1/3 items-center justify-center">
        <Image
          src="/static/images/jason.jpg"
          alt="realy bad picture of Jason"
          width={150}
          height={100}
        />
      </div>
      <div className="flex flex-col md:w-2/3 items-center justify-center gap-20">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-4xl major">HEY !</h1>
          <br />

          <p className="font-bold text-2xl italic">
            <span className="major text-4xl">"</span>Je suis Jason, développeur
            Full-Stack et vous êtes les bienvenu·e·s sur mon portfolio.
            <span className="major text-4xl">"</span>
          </p>
        </div>
        <div
          className="flex w-full justify-center md:justify-start"
          onClick={() => {
            setTimeout(() => {
              scrollToSection("projects");
            }, 200);
          }}
        >
          <PersonnalisedButton buttonText="Mes projets" />
        </div>
      </div>
    </>
  );
};
export default Hero;
