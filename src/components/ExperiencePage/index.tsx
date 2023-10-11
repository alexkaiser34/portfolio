
import { useState } from 'react';
import { Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import './style.css';
import PersonalExperience from './PersonalExperience';
import ProfessionalExperience from './ProfessionalExperience';
import ProjectDropDown from './ProjectDropDown';

export type professionalProjects = "seL4 Doom Pendulum Demo" | "DornerWorks - Secure Technologies" | "DornerWorks - FPGA";
export type personalProjects = "Machine Learning Stock App" | "NBA App" | "Sports Betting App" | "Slot Machine" | "Drone";
export interface ExperiencePageProps {
    activeProject: professionalProjects | personalProjects
}

function ExperiencePage(){

    const [toggle, setToggle] = useState(0);

    const [activeProject, setActiveProject] = useState<professionalProjects | personalProjects>('seL4 Doom Pendulum Demo');

    const ProjectListProfessional:professionalProjects[] = [
        'seL4 Doom Pendulum Demo',
        'DornerWorks - Secure Technologies',
        'DornerWorks - FPGA'
    ];

    const ProjectListPersonal:personalProjects[] = [
        'Machine Learning Stock App',
        'NBA App',
        'Sports Betting App',
        'Drone',
        'Slot Machine'
    ];


    return (
        <div className='ExperiencePage-container'>
                <div className='button-div-wrapper'>
                    <div className='fixed-button-wrapper'>
                        <div className='button-div'>
                            <ButtonGroup className='button-group-experience'>
                                <button style={{
                                    backgroundColor: toggle == 0 ? 'lightgreen' : '',
                                    color: toggle == 0 ? '#050e2f' : '',
                                }}className="professional-button" onClick={() => {
                                    window.scrollTo(0,0);
                                    setToggle(0);
                                    setActiveProject("seL4 Doom Pendulum Demo");
                                }}>Professional</button>
                                <button style={{
                                    backgroundColor: toggle == 1 ? 'lightgreen' : '',
                                    color: toggle == 1 ? '#050e2f' : ''
                                }}className="personal-button" onClick={() => {
                                    window.scrollTo(0,0);
                                    setToggle(1);
                                    setActiveProject("Machine Learning Stock App");
                                }}>Personal</button>
                            </ButtonGroup>
                        </div>
                        <div className="page-dropdown-wrapper">
                                <div className="page-dropdown">
                                    <h2 style={{paddingRight: '20px'}}>
                                    {activeProject === "DornerWorks - Secure Technologies" ? "Projects: " : "Project: "}
                                    </h2>
                                    {toggle == 0 ?
                                    <ProjectDropDown activeProject={activeProject} setActiveProject={setActiveProject} projectList={ProjectListProfessional} /> :
                                    <ProjectDropDown activeProject={activeProject} setActiveProject={setActiveProject} projectList={ProjectListPersonal} />
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            <div className='experience-content'>
                {
                    toggle == 0 ? <ProfessionalExperience activeProject={activeProject} /> :
                    <PersonalExperience activeProject={activeProject} />
                }

            </div>
        </div>
    )
}


export default ExperiencePage;