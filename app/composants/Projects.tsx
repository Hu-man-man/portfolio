import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import PersonnalisedButton from "./PersonnalisedButton";

type ProjectsProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

type DescType = "trello" | "fdm" | "default";

const Projects = ({ lang, scrollToSection }: ProjectsProps) => {
  const [appDescription, setAppDescription] = useState<DescType | null>(null);
  const [projectsVisible, setProjectsVisible] = useState<boolean>(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  const projectsData = [
    {
      id: "trello",
      name: "Clone de Trello",
      url: "https://trello-clone-nu-neon.vercel.app/",
      imageSrc: "/static/images/screen-trello.png",
      alt: "screenshot de l'application clone trello",
      description:
        "Application en React clone de Trello. Exercice d'entrainement avec la technologie TypeScript, et le glissé déposé",
      technologies: "HTML / CSS / JavaScript / TypeScript",
    },
    {
      id: "fdm",
      name: "La ferme de Meyrenal",
      url: "https://www.youtube.com/playlist?list=PLbaOVmckgD0P3bAD0lUh3JMLpL4Xlk4vT",
      imageSrc: "/static/images/screen-LFDM.png",
      alt: "screenshot de l'application la ferme de Meyreinal",
      description:
        "Application créée en collaboration avec Assen Iliev destinée à un permaculteur Ardéchois",
      technologies: "HTML / CSS / JavaScript / React Native / Redux / Express / Expo / MongoDB / Bcrypt / Cloudinary",
    },
    {
      id: "myMoviz",
      name: "My Moviz",
      url: "https://mymoviz-front-zeta.vercel.app/",
      imageSrc: "/static/images/screen-mymoviz.png",
      alt: "screenshot de l'application My Moviz",
      description:
        "Application en React pour le front-end et express pour le back-end. Exercice d'entrainement pour coder avec next.js, faire une interface adaptative et travailler avec une api",
      technologies: "HTML / CSS / JavaScript / Next / React / Express",
    },
    {
      id: "portfolio",
      name: "Mon Portfolio",
      url: "https://portfolio-mu-ten-80.vercel.app/",
      imageSrc: "/static/images/screen-portfolio.png",
      alt: "screenshot de l'application porfolio",
      description: "Application sur laquelle vous êtes actuellement.",
      technologies: "HTML / Tailwind / JavaScript / TypeScript / React / Next",
    },
    {
      id: "x",
      name: '"Clone" de X',
      url: "https://x-like.vercel.app/",
      imageSrc: "/static/images/x.png",
      alt: "screenshot de l'application x",
      description: "Application d'entrainement avec firebase.",
      technologies: "HTML / Tailwind / JavaScript / React / Next / Firestore Database / Firebase Auth",
    },
  ];

  const handleDescription = (event: DescType) => {
    setAppDescription(event);
  };

  const handleProjectsVisible = () => {
    setTimeout(() => {

      !projectsVisible && scrollToSection("projects");
      setProjectsVisible(!projectsVisible);
    }, 200);
  };

  const textButton = (
    <>
      <i
        className={`fi fi-rr-chevron-double-${
          projectsVisible ? "down" : "up"
        } items-center mr-2`}
      ></i>
      {projectsVisible ? "Plus" : "Moins"} de projets
      <i
        className={`fi fi-rr-chevron-double-${
          projectsVisible ? "down" : "up"
        } ml-2`}
      ></i>
    </>
  );

  return (
    <>
      <div className="title text-center text-xl font-bold major">
        Quelques projets récents:
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 ">
        {projectsData
          .slice(0, projectsVisible ? 2 : projectsData.length)
          .map((project) => (
            <div
              key={project.id}
              className={`flex justify-center align-center aspect-[3/2] rounded-xl overflow-hidden bg-white border border-black grow-0 basis-1/3 max-w-80 min-h-[220px] md:min-h-0 relative`}
              onClick={() => handleDescription(project.id as DescType)}
            >
              <Image
                src={project.imageSrc}
                alt={project.alt}
                width={300}
                height={300}
                layout="responsive"
                className="object-contain"
              />
              <div className="bg-[#ED7D3A]/70 backdrop-blur-sm rounded-xl inset-0 absolute flex flex-col justify-center items-center gap-6 text-white opacity-0 hover:opacity-100 transition ease-in-out duration-700">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <ProjectModal project={project} />
              </div>
            </div>
          ))}
      </div>
      <div className="w-full flex justify-center major items-center">
        <div onClick={() => handleProjectsVisible()}>
          <PersonnalisedButton buttonText={textButton} />
        </div>
      </div>
    </>
  );
};

export default Projects;
