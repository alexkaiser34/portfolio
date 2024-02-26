import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import PcbImage from '../../../images/pcb-carAlarm.gif';


function StmCarAlarm(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Car Alarm System - PCB and Software Design';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - May 2023";

    project.projectDescription = `
        I worked on this project on a team of 2 engineers as part of an 
        printed circuit board class at GVSU. The goal of this project was to 
        create a custom printed circuit board and embedded system using a 
        STM32 MCU.  The system would function as a car alarm and be powered by 
        a solar panel. The system alerted the user of motion near their car over 
        bluetooth communication to a smart device.  Motion logs were stored in SPI flash 
        and could be read by the user from an application on their smart device.`;

    project.projectImage = PcbImage;

    project.projectRole = 'Academic - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Build and construct a frame for the car alarm device",
        "Design a printed circuit board from scratch containing a STM32 MCU",
        "Design schematics for various sensors and PCB components",
        "Write embedded software drivers for bluetooth, SPI flash, and sensors connected as GPIO",
        "Implement an overall state machine to control the logic of the program",
        "Research/test integrated circuits and components for the printed circuit board"
    ]

    project.projectContributions = [
        "Built, wired, and constructed a car alarm device frame",
        "Created a state machine to control the overall program flow of the car alarm",
        "Designed drivers for bluetooth, SPI flash, and GPIO sensors",
        "Tested PCB components and integrated circuits using logic analyzers and oscilliscopes",
        "Designed and routed the printed cirucit board using Altium Software"
    ]

    return (
        <TemplateProject {...project} />
    );
}


export default StmCarAlarm;