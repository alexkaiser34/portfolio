import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import SlotMachineGif from '../../../images/SlotMachine.gif';


function SlotMachine(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Slot Machine Design';

    project.alignment = "right";

    project.projectTimeline = "August 2020 - January 2021";

    project.projectDescription = `

        I worked on this project individually at Grand Valley State University.
        The goal of the project was to create a slot machine using an MSP430 microcontroller.
        The slot machine contained pushbuttons, a keypad, various sensors, an LCD display, and RGB LEDs.
        The user can interact with the slot machine through the pushbuttons and keypads.
        `;



    project.projectImage = SlotMachineGif;

    project.projectRole = 'Individual - Software Engineer';

    project.projectResponsibilities = [
        "Design schematics and circuitry for all sensors and peripherals on the slot machine",
        "Program the microcontroller to function as a slot machine",
        "Build an enclosure to resemble a slot machine",
        "Write documentation about the design process of the machine"
    ]

    project.projectContributions = [
        "Created C programs to control all peripherals and sensors",
        "Created main C application to control the state of the slot machine",
        "Constructed and painted a wooden enclosure",
        "Documented each step of the design process"
    ]

    return (
        <TemplateProject {...project} />
    );
}


export default SlotMachine;