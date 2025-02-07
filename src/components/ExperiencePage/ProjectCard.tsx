import {  Image } from "react-bootstrap";
import { ProjectType } from "./getProjects";

interface ProjectCardProps {
    project: ProjectType;
    onLearnMore: () => void;
}

function ProjectCard({ project, onLearnMore }: ProjectCardProps) {
    return (
        <div className="project-card-inner">
            <div className="project-image-container">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fluid 
                    className="project-image"
                />
            </div>
            <div className="project-content">
                <h3 className="pb-4">{project.title}</h3>
                <p className="pb-4">{project.shortDescription}</p>
                <button onClick={onLearnMore} className="learn-more-button">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;