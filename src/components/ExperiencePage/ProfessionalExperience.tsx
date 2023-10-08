import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ExperiencePageProps } from ".";
import DwFpga from "./ProfessionalProjects/DwFpga";
import DwSecureTechnologies from "./ProfessionalProjects/DwSecureTechnologies";
import SeniorProject from "./ProfessionalProjects/SeniorProject";
import ProjectDropDown from "./ProjectDropDown";


function ProfessionalExperience(props: ExperiencePageProps){

    return (
        <div className="professional-page-wrapper">
            <div className="professional-project-content">
            {
                props.activeProject == "seL4 Doom Pendulum Demo" ? <SeniorProject /> :
                props.activeProject == "DornerWorks - Secure Technologies" ? <DwSecureTechnologies /> :
                <DwFpga />
            }
            </div>
        </div>
    );
}


export default ProfessionalExperience;