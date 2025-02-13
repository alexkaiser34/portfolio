import { useEffect, useState } from 'react';
import { ButtonGroup, Container, Dropdown, Modal, Spinner } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'react-bootstrap-icons';
import './style.css';
import './TemplateProject.css';
import ProjectCard from './ProjectCard';
import TemplateProject from './TemplateProject';
import { ProjectType, getAllProjects } from './getProjects';

type CategorySelect = "Personal" | "Professional" | "Academic";

interface MonthDict {
    [key: string]: number;
}

const monthDict:MonthDict = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
}

function ExperiencePage() {
    const [category, setCategory] = useState<CategorySelect>("Professional");
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [company, setCompany] = useState<string>("All");
    const [availableCompanies, setCompanies] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Alex Kaiser - Experience";
        getAllProjects()
            .then((data) => {
                const sortedData = data.sort((a, b) => {
                    const aTimeline = a.timeline.split(" ");
                    const bTimeLine = b.timeline.split(" ");

                    if ((aTimeline.length < 4) || (bTimeLine.length < 4))
                    {
                        return 0
                    }

                    const aYear = aTimeline[aTimeline.length - 1];
                    const aMonth = aTimeline[aTimeline.length - 2];
                    const bYear = bTimeLine[bTimeLine.length - 1];
                    const bMonth = bTimeLine[bTimeLine.length - 2];

                    if (bYear === "Present")
                    {
                        return 1;
                    }

                    if (aYear === "Present")
                    {
                        return -1;
                    }

                    if (Number(aYear) > Number(bYear))
                    {
                        return -1;
                    }
                    else if (Number(bYear) > Number(aYear))
                    {
                        return 1;
                    }
                    else
                    {
                        if ((aMonth in monthDict) && (bMonth in monthDict))
                        {
                            if (monthDict[aMonth] > monthDict[bMonth])
                            {
                                return -1;
                            }
                            else
                            {
                                return 1;
                            }
                        }
                        else
                        {
                            return 0;
                        }
                    }
                })
                setProjects(sortedData);
                let temp: string[] = [];
                sortedData.forEach(project => {
                    if (project.company && !temp.includes(project.company)) {
                        temp.push(project.company);
                    }
                });
                temp.unshift("All");
                setCompanies(temp);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const handleLearnMore = (project: ProjectType) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const ProjectCards = () => {
        const projectsToShow = projects.filter((project) => {
            if (category === "Professional") {
                return company === "All" 
                    ? project.category === category
                    : project.company === company && project.category === category;
            }
            return project.category === category;
        });

        return (
            <div 
                className="projects-grid" 
            >
                {projectsToShow.map((project) => (
                    <div key={project.title} className='project-card'>
                        <ProjectCard 
                            project={project} 
                            onLearnMore={() => handleLearnMore(project)}
                        />
                    </div>
                ))}
            </div>
        );
    };

    const CategoryButton = (c: CategorySelect) => (
        <button
            className={`category-button ${category === c ? 'active' : ''}`}
            onClick={() => setCategory(c)}
        >
            {c}
        </button>
    );

    const CompanyDropDown = () => (
        <Dropdown className="company-dropdown">
            <Dropdown.Toggle variant="outline-light">
                {company}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {availableCompanies.map((c) => (
                    <Dropdown.Item 
                        key={c} 
                        onClick={() => setCompany(c)}
                        active={company === c}
                    >
                        {c}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );

    return (
        <div className="experience-page">
            <Container fluid>
                <motion.div 
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Experience</h1>
                    <div className="highlight-bar"></div>
                    <p className="header-description">
                        Explore my journey through various projects and experiences
                    </p>
                </motion.div>

                {loading ? (
                    <div className="loading-container">
                        <Spinner animation="border" role="status" variant="info">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <p>Loading projects...</p>
                    </div>
                ) : (
                    <>
                        <div className="filters-section">
                            <ButtonGroup className="category-buttons">
                                {CategoryButton("Professional")}
                                {CategoryButton("Personal")}
                                {CategoryButton("Academic")}
                            </ButtonGroup>

                            {category === "Professional" && (
                                <div className="company-filter">
                                    <span>Company:</span>
                                    <CompanyDropDown />
                                </div>
                            )}
                        </div>

                        <ProjectCards />
                    </>
                )}

                <AnimatePresence>
                    {showModal && selectedProject && (
                        <Modal 
                            show={showModal} 
                            onHide={() => setShowModal(false)}
                            fullscreen
                            className="project-modal"
                        >
                            <Modal.Header>
                                <button 
                                    className="close-button"
                                    onClick={() => setShowModal(false)}
                                >
                                    <X size={24} />
                                </button>
                            </Modal.Header>
                            <Modal.Body>
                                <TemplateProject project={selectedProject} />
                            </Modal.Body>
                        </Modal>
                    )}
                </AnimatePresence>
            </Container>
        </div>
    );
}

export default ExperiencePage;