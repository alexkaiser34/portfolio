import React, { useState } from "react";
import DroneProject from "./PersonalProjects/DroneProject";
import MLStocks from "./PersonalProjects/MLStocks";
import NBAapp from "./PersonalProjects/NBAapp";
import SlotMachine from "./PersonalProjects/SlotMachine";
import SportsBetApp from "./PersonalProjects/SportsBetApp";
import ProjectDropDown from "./ProjectDropDown";

export type personalProjects = "Machine Learning Stock App" | "NBA App" | "Sports Betting App" | "Slot Machine" | "Drone";

function PersonalExperience(){

    const [activeProject, setActiveProject] = useState<personalProjects>('Machine Learning Stock App');

    const ProjectList:personalProjects[] = [
        'Machine Learning Stock App',
        'NBA App',
        'Sports Betting App',
        'Drone',
        'Slot Machine'
    ];

    return (
        <div className="personal-page-wrapper">
            <div className="flex-dropdown-wrapper">
                <div className="page-dropdown-wrapper">
                    <div className="personal-page-dropdown">
                        <h2 style={{paddingRight: '20px'}}>Project: </h2>
                        <ProjectDropDown activeProject={activeProject} setActiveProject={setActiveProject} projectList={ProjectList} />
                    </div>
                </div>
            </div>
            <div className="personal-project-content">
            {
                activeProject === "Machine Learning Stock App" ? <MLStocks /> :
                activeProject === "NBA App" ? <NBAapp /> :
                activeProject === "Sports Betting App" ? <SportsBetApp /> :
                activeProject === "Drone" ? <DroneProject /> :
                <SlotMachine />
            }
            </div>
        </div>
    );
}


export default PersonalExperience;