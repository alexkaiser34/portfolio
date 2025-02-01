import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import PcbImage from '../../../images/pcb-carAlarm.gif';


function StmCarAlarm(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Car Alarm System - PCB and Software Design';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - May 2023";

    project.projectDescription =  `
    This project was undertaken as part of a printed circuit board class at GVSU, involving a team of two engineers.
    The objective was to create a custom printed circuit board and embedded system using an STM32 MCU.
    The system functioned as a car alarm powered by a solar panel, alerting the user of motion near their car via Bluetooth communication to a smart device.
    Motion logs were stored in SPI flash and could be accessed by the user through an application on their smart device.`;

    project.projectImage = PcbImage;

    project.projectRole = 'Academic - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Build and construct a frame for the car alarm device",
        "Design a printed circuit board from scratch containing an STM32 MCU",
        "Design schematics for various sensors and PCB components",
        "Write embedded software drivers for Bluetooth, SPI flash, and sensors connected as GPIO",
        "Implement an overall state machine to control the logic of the program",
        "Research and test integrated circuits and components for the printed circuit board"    ]

    project.projectContributions = [
        "Built, wired, and constructed a robust frame for the car alarm device",
        "Designed and developed a custom printed circuit board with an STM32 MCU",
        "Implemented embedded software drivers for Bluetooth communication, SPI flash storage, and sensor integration",
        "Developed a state machine to manage the overall program logic",
        "Conducted research and testing of integrated circuits and components for optimal performance"
    ]

    return (
        <TemplateProject {...project} />
    );
}


export default StmCarAlarm;