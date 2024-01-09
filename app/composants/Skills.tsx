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
    "écoute active",
    "précision",
    "perfectionnisme",
    "travail en équipe",
    "autonomie",
    "adaptabilité",
    "management",
    "organisation",
  ];

  const mapping = (list: string[]) => {
    return list.map((item, index) => (
      <div
        key={index}
        className="p-3 rounded-lg bg-gray-300 text-black font-bold"
      >
        {item}
      </div>
    ));
  };

  return (
    <>
      <div className="flex md:w-1/3 items-center justify-center m-6 md:m-0">
        <p className="text-center md:text-left">
          {lang === "fr"
            ? "Accedente ut et et ignobiles et quod et inserunt et ut obscuros adsueti et et quod inserunt venditare quod lucris eruditos inutiles enim venditare inserunt et prandiis accedente mercede infaustos et ignobiles et et accedente obscuros et obscuros et obscuros mercede enim haec adsueti venditare nomenclatores et vitant inutiles vitant."
            : "Accedente ut et et ignobiles et quod et inserunt et ut obscuros adsueti et et quod inserunt venditare quod lucris eruditos inutiles enim venditare inserunt et prandiis accedente mercede infaustos et ignobiles et et accedente obscuros et obscuros et obscuros mercede enim haec adsueti venditare nomenclatores et vitant inutiles vitant."}
        </p>
      </div>
      <div className="flex items-center justify-center md:w-2/3">
        <div>
          <h2 className='ml-8 mb-3 text-xl font-bold'>My Skills</h2>
          <div className="flex flex-wrap px-9 gap-3 md:content-center">
            {mapping(skillsList)}
          </div>
          <br/>
          <h2 className='ml-8 mb-3 text-xl font-bold'>My Soft Skills</h2>
          <div className="flex flex-wrap px-9 gap-3 md:content-center">
            {mapping(softSkillsList)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
