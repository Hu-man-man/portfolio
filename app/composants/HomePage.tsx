import Image from "next/image";

type HomePageProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

const HomePage = ({ lang, scrollToSection }: HomePageProps) => {
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
      <div className="flex flex-col md:w-2/3 items-center justify-center">
        <div>
          <div className="text-center md:text-left ">
            {lang === "fr" ? (
              <>
                <h2 className="font-bold text-3xl">
                  Bienvenue sur mon Portfolio
                </h2>
                <br />

                <p>
                  Je m'appelle Jason Ricou et je suis développeur full-stack
                  spécialisé en JavaScript et en Réact.{" "}
                </p>
                <p>
                  Investi, Souriant et Super motivé, laissez moi apporter mes
                  compétences et mon énergie à vos projets !
                </p>
              </>
            ) : (
              <>
                Apollinares locum nulla Crateras multorum nulla nulla in lapide
                ambo non Antiochia constaret Crateras in Apollinares per lapide
                post Antiochia lapide pater per et exilium Crateras pervenissent
                quae occiduntur in dilatata levius multorum igitur et quae
                mandatum nulla Apollinares levius nomine filius ad clades et
                constaret exilium post ambo mandatum fortunas quarto Antiochia."
              </>
            )}
          </div>
        </div>
          <a
            className="bg-white p-4  rounded-xl cursor-pointer my-10"
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            Mes projets
          </a>
      </div>
    </>
  );
};
export default HomePage;
