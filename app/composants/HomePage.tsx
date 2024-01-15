import Image from "next/image";

type HomePageProps = {
  lang: "fr" | "an";
};

const HomePage = ({ lang }: HomePageProps) => {
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
      <div className="flex px-9 md:w-2/3 items-center">
        <p className="text-center md:text-left ">
          {lang === "fr" ? (
            <>
              <h2 className="font-bold text-xl">Bienvenue sur mon Portfolio</h2>
              <br />

              <p>
                Je m'appelle Jason Ricou et je suis développeur full-stack
                spécialisé en JavaScript et en Réact.{" "}
              </p>
              <p>
                Investi, Souriant et Motivé, je suis à la recherche d’une
                alternance au sein d’une équipe. Je veux mettre en pratique mes
                connaissances et continuer à apprendre. Le métier d’opticien m'a
                inculqué des compétences essentielles pour travailler enéquipe,
                faire preuve de rigueur, d'écoute active, et résoudre des
                problèmes de manière réfléchie. Depuis que j’ai décidé de
                devenir développeur je suis en apprentissage continu. Super
                motivé, laissez moi apporter mes compétences et mon énergie à
                vos projets !
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
        </p>
      </div>
    </>
  );
};
export default HomePage;
