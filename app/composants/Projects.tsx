import Image from "next/image";
import { useState } from "react";

type ProjectsProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

type DescType = "trello" | "fdm" | "default";

const Projects = ({ lang, scrollToSection }: ProjectsProps) => {
  const [appDescription, setAppDescription] = useState<DescType | null>(null);
  const [projectsVisible, setProjectsVisible] = useState<boolean>(true);

  const projectsData = [
    {
      id: "trello",
      url: "https://trello-clone-nu-neon.vercel.app/",
      imageSrc: "/static/images/screen-trello.png",
      alt: "realy bad picture of Jason",
      description:
        "Application en React clone de Trello. Exercice d'entrainement avec la technologie TypeScript, et le glissé déposé",
    },
    {
      id: "fdm",
      url: "https://www.youtube.com/playlist?list=PLbaOVmckgD0P3bAD0lUh3JMLpL4Xlk4vT",
      imageSrc: "/static/images/screen-LFDM.png",
      alt: "screenshot de l'application la ferme de Meyreinal",
      description:
        "Application en React Native créée en collaboration avec Assen Iliev qui utilise diverses technologies. Elle est destinée à un permaculteur Ardéchois",
    },
    {
      id: "myMoviz",
      url: "https://mymoviz-front-zeta.vercel.app/",
      imageSrc: "/static/images/screen-myMoviz.png",
      alt: "screenshot de l'application My Moviz",
      description:
        "Application en React pour le front-end et express pour le back-end. Exercice d'entrainement pour coder avec next.js, faire une interface adaptative et travailler avec une api",
    },
    {
      id: "myMoviz",
      url: "https://mymoviz-front-zeta.vercel.app/",
      imageSrc: "/static/images/screen-myMoviz.png",
      alt: "screenshot de l'application My Moviz",
      description:
        "Application en React pour le front-end et express pour le back-end. Exercice d'entrainement pour coder avec next.js, faire une interface adaptative et travailler avec une api",
    },
  ];

  const handleDescription = (event: DescType) => {
    setAppDescription(event);
  };

  const handleProjectsVisible = () => {
    !projectsVisible && scrollToSection("projects");
    setProjectsVisible(!projectsVisible);
  };

  return (
    <>
      <div className="title text-center">
        Projects: Here are some of my recent projects:
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 w-screen">
        {projectsData
          .slice(0, projectsVisible ? 2 : projectsData.length)
          .map((project) => (
            <div
              key={project.id}
            //   href={project.url}
            //   target="_blank"
              className={`flex justify-center align-center aspect-[3/2] rounded-xl overflow-hidden bg-white grow-0 basis-1/3 max-w-80 min-h-[220px] md:min-h-0`}
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
            </div>
          ))}
      </div>
      <div className="mt-4 text-center mx-6">
        <p className="text-lg">
          {appDescription !== null
            ? projectsData.find((project) => project.id === appDescription)
                ?.description
            : "Cliquez sur les images pour avoir plus d'informations"}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-white p-4  rounded-xl"
          onClick={() => handleProjectsVisible()}
        >
          <i
            className={`fi fi-rr-chevron-double-${
              projectsVisible ? "down" : "up"
            }`}
          ></i>{" "}
          {projectsVisible ? "Plus" : "Moins"} de projets{" "}
          <i
            className={`fi fi-rr-chevron-double-${
              projectsVisible ? "down" : "up"
            }`}
          ></i>
        </button>
      </div>
    </>
  );
};

export default Projects;
