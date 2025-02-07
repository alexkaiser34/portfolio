import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Calendar, BriefcaseFill, CodeSlash } from "react-bootstrap-icons";
import { ProjectType } from "./getProjects";
import "./TemplateProject.css";

export interface TemplateProjectProps {
    project: ProjectType;
}

function TemplateProject({ project }: TemplateProjectProps) {
    return (
        <Container fluid className="template-project">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="project-grid"
            >
                <div className="project-media">
                    <div className="image-container">
                        <Image 
                            src={project.image} 
                            alt={project.title}
                            fluid
                            className="project-image"
                        />
                    </div>
                </div>

                <div className="project-header">
                    <h1>{project.title}</h1>
                    <div className="timeline">
                        <Calendar size={20} />
                        <span>{project.timeline}</span>
                    </div>
                </div>

                <div className="description-section">
                    <h2>About the Project</h2>
                    <p>{project.LongDescription}</p>
                </div>

                <div className="role-section">
                    <div className="section-header">
                        <BriefcaseFill size={20} />
                        <h2>Role: {project.role}</h2>
                    </div>
                    <ul className="feature-list">
                        {project.responsibilities.map((item, index) => (
                            <motion.li
                                key={`resp-${index}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="contributions-section">
                    <div className="section-header">
                        <CodeSlash size={20} />
                        <h2>Technical Accomplishments</h2>
                    </div>
                    <ul className="feature-list">
                        {project.contributions.map((item, index) => (
                            <motion.li
                                key={`cont-${index}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </Container>
    );
}

export default TemplateProject;