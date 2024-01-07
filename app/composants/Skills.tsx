
type SkillsProps = {
  lang: "fr" | "an";
};

const Skills = ({ lang }: SkillsProps) => {

    const skillsList = ['HTML/CSS3','React','ReactNative', 'JavaScript/TypeScript', 'Next.js', 'TailwindCSS','Firebase', 'Mongo'];
    const softSkillsList = ['Curiosité', 'écoute active', 'précision','perfectionnisme', 'travail en équipe', 'autonomie','adaptabilité', 'management', 'organisation'];

    const mapping = (list: string[]) => {
        return list.map((item, index) => (
            <div key={index}>{item}</div>
        ))
    }

  return (
    <>
      <div className="flex md:w-1/3 items-center justify-center">
        <p className="text-center md:text-left ">
          {lang === "fr"
            ? "Accedente ut et et ignobiles et quod et inserunt et ut obscuros adsueti et et quod inserunt venditare quod lucris eruditos inutiles enim venditare inserunt et prandiis accedente mercede infaustos et ignobiles et et accedente obscuros et obscuros et obscuros mercede enim haec adsueti venditare nomenclatores et vitant inutiles vitant."
            : "Apollinares locum nulla Crateras multorum nulla nulla in lapide ambo non Antiochia constaret Crateras in Apollinares per lapide post Antiochia lapide pater per et exilium Crateras pervenissent quae occiduntur in dilatata levius multorum igitur et quae mandatum nulla Apollinares levius nomine filius ad clades et constaret exilium post ambo mandatum fortunas quarto Antiochia."}
        </p>
      </div>
      <div className="flex px-9 md:w-2/3 items-center gap-3 *:p-5 *:rounded-lg *:bg-gray-300 *:text-black *:font-bold">
        <div>HTML/CSS</div>
        {mapping(skillsList)}
      </div>
    </>
  );
};
export default Skills;
