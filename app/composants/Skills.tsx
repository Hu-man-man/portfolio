type SkillsProps = {
  lang: "fr" | "an";
};

const Skills = ({ lang }: SkillsProps) => {
  const skillsList = [
    "HTML/CSS3",
    "React",
    "ReactNative",
    "JavaScript/TypeScript",
    "Next.js",
    "TailwindCSS",
    "Firebase",
    "Mongo",
  ];
  const softSkillsList = [
    "Curiosité",
    "Ecoute active",
    "Précision",
    "Perfectionnisme",
    "Travail en équipe",
    "Autonomie",
    "Adaptabilité",
    "Management",
    "Organisation",
  ];

  const mapping = (list: string[]) => {
    return list.map((item, index) => (
      <div key={index} className="p-3 rounded-lg bg-white text-black font-bold">
        {item}
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-col md:w-1/2 items-left justify-center m-6 md:m-0">
        <h2 className="ml-8 mb-3 text-xl font-bold major">A propos</h2>
        <br/>
        <p className="text-center text-xl md:text-left italic leading-relaxed">
          {lang === "fr" ? (
            <>
              {
                "<< Passionné par la résolution de problèmes et la création, je me suis spécialisé en React et suis constamment ouvert à l'apprentissage de nouvelles technologies. En 2023 j'ai obtenu un diplôme en développement d'applications web et mobile."
              }
              <br />
              {
                "Mon expérience en tant qu'opticien m'a inculqué des compétences de communication et de réflexion. Je suis enthousiaste à l'idée d'apporter ma passion et mes compétences au sein de vos équipes. >>"
              }
            </>
          ) : (
            "Apollinares locum nulla Crateras multorum nulla nulla in lapide ambo non Antiochia constaret Crateras in Apollinares per lapide post Antiochia lapide pater per et exilium Crateras pervenissent quae occiduntur in dilatata levius multorum igitur et quae mandatum nulla Apollinares levius nomine filius ad clades et constaret exilium post ambo mandatum fortunas quarto Antiochia."
          )}
        </p>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <div>
          <h2 className="ml-8 mb-3 text-lg font-bold major">My Skills</h2>
          <div className="flex flex-wrap px-9 gap-3 md:content-center">
            {mapping(skillsList)}
          </div>
          <br />
          <h2 className="ml-8 mb-3 text-lg font-bold major">My Soft Skills</h2>
          <div className="flex flex-wrap px-9 gap-3 md:content-center">
            {mapping(softSkillsList)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
