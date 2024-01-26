import { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";
import PersonnalisedButton from "./PersonnalisedButton";

type ProjectModalProps = {
  project: {
    id: string;
    name: string;
    url: string;
    imageSrc: string;
    alt: string;
    description: string;
    technologies: string;
  };
};

const ProjectModal = ({ project }: ProjectModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 200);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div onClick={handleOpenModal}>
        <PersonnalisedButton
          buttonText={
            <i className="text-3xl fi fi-br-zoom-in text-gray-600 cursor-pointer my-10"></i>
          }
        />
      </div>

      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={true}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-2/3 min-h-96 bg-white rounded-lg outline-0 border border-black"
      >
        <div className="flex justify-between text-xl p-5 font-bold">
          <h2>{project.name}</h2>
          <i
            className="fi fi-rr-cross cursor-pointer hover:-translate-y-0.5 transition ease-in-out duration-50 text-gray-600"
            onClick={handleCloseModal}
          ></i>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div
              className={`hidden md:flex justify-center align-center aspect-[3/2] rounded-xl overflow-hidden bg-white grow-0 basis-1/3 max-w-80 min-h-[220px] md:min-h-0 relative pl-10 `}
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
            <div className="flex flex-col md:w-2/3 px-3 md:pr-10 gap-10">
              <p>{project.description}</p>
              <div>
                <h2>Technologies utilisées :</h2>
                <p>{project.technologies}</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                className="md:text-6xl text-lg font-bold"
                onClick={handleCloseModal}
              >
                LINK
                <i className="fi fi-rr-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ProjectModal;
