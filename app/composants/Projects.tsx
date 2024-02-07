import Image from "next/image";
import { useState } from "react";
import projectsData from "../data/projectsData.json"
import ProjectModal from "../ui/ProjectModal";
import PersonnalisedButton from "../ui/PersonnalisedButton";

type ProjectsProps = {
  lang: "fr" | "an";
  scrollToSection: (id: string) => void;
};

type DescType = "trello" | "fdm" | "default";

const Projects = ({ lang, scrollToSection }: ProjectsProps) => {
  const [appDescription, setAppDescription] = useState<DescType | null>(null);
  const [projectsVisible, setProjectsVisible] = useState<boolean>(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

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
