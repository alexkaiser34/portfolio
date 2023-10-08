import React, { useState } from "react";
import { ExperiencePageProps } from ".";
import DroneProject from "./PersonalProjects/DroneProject";
import MLStocks from "./PersonalProjects/MLStocks";
import NBAapp from "./PersonalProjects/NBAapp";
import SlotMachine from "./PersonalProjects/SlotMachine";
import SportsBetApp from "./PersonalProjects/SportsBetApp";
import ProjectDropDown from "./ProjectDropDown";

export type personalProjects = "Machine Learning Stock App" | "NBA App" | "Sports Betting App" | "Slot Machine" | "Drone";

function PersonalExperience(props: ExperiencePageProps){

    return (
        <div className="personal-page-wrapper">
            <div className="personal-project-content">
            {
                props.activeProject === "Machine Learning Stock App" ? <MLStocks /> :
                props.activeProject === "NBA App" ? <NBAapp /> :
                props.activeProject === "Sports Betting App" ? <SportsBetApp /> :
                props.activeProject === "Drone" ? <DroneProject /> :
                <SlotMachine />
            }
            </div>
        </div>
    );
}


export default PersonalExperience;