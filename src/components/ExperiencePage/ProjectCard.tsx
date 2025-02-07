import { useState } from "react";
import {  Modal, Image } from "react-bootstrap";
import { ProjectType } from "./getProjects";
import TemplateProject from "./TemplateProject";

interface ProjectCardProps {
    project: ProjectType;
    onLearnMore: () => void;
}

function ProjectCard({ project, onLearnMore }: ProjectCardProps) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
      setShow(true);
    }

    const ModalCard = () => {
      return (
        <Modal className="card-modal" fullscreen={true} show={show} onHide={() => setShow(false)}>
          <Modal.Header className="card-modal-header" closeButton> 
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="card-modal-body">
              <TemplateProject project={project} />
          </Modal.Body>
        </Modal>
      )
    }

    return (
        <div className="project-card">
            <div className="project-image-container">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fluid 
                    className="project-image"
                />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <button onClick={onLearnMore} className="learn-more-button">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;