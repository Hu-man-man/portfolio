import Image from "next/image";
import PersonnalisedButton from "../ui/PersonnalisedButton";

type HeroProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

const Hero = ({ lang, scrollToSection }: HeroProps) => {
  return (
    <>
      <div className="flex md:w-1/3 items-center justify-center">
        <div className="flex border border-black bg-white h-40 w-40 md:h-60 md:w-60 overflow-hidden rounded-full">
          <Image
            src="/static/images/jason.png"
            alt="realy bad picture of Jason"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  gap-9 md:gap-20">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl major">
            HEY,
            <br />
            je suis Jason
          </h1>
          <br />

          <p className="font-bold text-xl md:3xl">
            Développeur Full-Stack
            <br />
            Bienvenu·e·s sur mon portfolio.
            <span className="major pl-2"></span>
          </p>
        </div>
        <div
          className="flex w-2/3 justify-center md:justify-start"
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
