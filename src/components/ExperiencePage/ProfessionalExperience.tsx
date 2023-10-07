import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DwFpga from "./ProfessionalProjects/DwFpga";
import DwSecureTechnologies from "./ProfessionalProjects/DwSecureTechnologies";
import SeniorProject from "./ProfessionalProjects/SeniorProject";
import ProjectDropDown from "./ProjectDropDown";

export type professionalProjects = "seL4 Doom Pendulum Demo" | "DornerWorks - Secure Technologies" | "DornerWorks - FPGA";

function ProfessionalExperience(){

    const [activeProject, setActiveProject] = useState<professionalProjects>('seL4 Doom Pendulum Demo');

    const ProjectList:professionalProjects[] = [
        'seL4 Doom Pendulum Demo',
        'DornerWorks - Secure Technologies',
        'DornerWorks - FPGA'
    ];

    return (
        <div className="professional-page-wrapper">
            <div className="flex-dropdown-wrapper">
                <div className="page-dropdown-wrapper">
                    <div className="professional-page-dropdown">
                        <h2 style={{paddingRight: '20px'}}>
                        {activeProject === "seL4 Doom Pendulum Demo" ? "Project: " : "Projects: "}
                        </h2>
                        <ProjectDropDown activeProject={activeProject} setActiveProject={setActiveProject} projectList={ProjectList} />
                    </div>
                </div>
            </div>
            <div className="professional-project-content">
            {
                activeProject == "seL4 Doom Pendulum Demo" ? <SeniorProject /> :
                activeProject == "DornerWorks - Secure Technologies" ? <DwSecureTechnologies /> :
                <DwFpga />
            }
            </div>
        </div>
    );
}


export default ProfessionalExperience;