import { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";

type ProjectModalProps = {
  project: {
    id: string;
    name: string;
    url: string;
    imageSrc: string;
    alt: string;
    description: string;
  };
};

const ProjectModal = ({ project }: ProjectModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <i
        className="text-5xl fi fi-sr-add opacity-50 hover:opacity-100"
        onClick={handleOpenModal}
      ></i>

      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={true} // Remove if you don't need to hide the app from screen readers
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-2/3 min-h-96 bg-white rounded-lg outline-0 border border-black"
      >
        <div className="flex justify-between text-xl p-5">
          <h2>{project.name}</h2>
          <i className="fi fi-rr-cross" onClick={handleCloseModal}></i>
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
            <div className='flex flex-col md:w-2/3 px-3 md:pr-10 gap-10'>
            <p>{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              className="md:text-6xl text-lg font-bold"
              onClick={handleCloseModal}
            >
              LINK
            </a>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ProjectModal;
