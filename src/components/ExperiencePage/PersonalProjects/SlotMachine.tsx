import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import SlotMachineGif from '../../../images/SlotMachine.gif';


function SlotMachine(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Slot Machine Design';

    project.alignment = "right";

    project.projectTimeline = "August 2020 - January 2021";

    project.projectDescription = `
        This individual project was undertaken at Grand Valley State University.
        The objective was to design and implement a slot machine using an MSP430 microcontroller.
        The slot machine featured pushbuttons, a keypad, various sensors, an LCD display, and RGB LEDs.
        Users could interact with the slot machine through the pushbuttons and keypad.`;



    project.projectImage = SlotMachineGif;

    project.projectRole = 'Individual - Software Engineer';

    project.projectResponsibilities = [
        "Design schematics and circuitry for all sensors and peripherals on the slot machine",
        "Program the microcontroller to function as a slot machine",
        "Build an enclosure to resemble a slot machine",
        "Write documentation about the design process of the machine"
    ]

    project.projectContributions = [
        "Designed schematics and circuitry for all sensors and peripherals",
        "Programmed the MSP430 microcontroller to operate as a slot machine",
        "Constructed an enclosure to replicate the appearance of a traditional slot machine",
        "Authored comprehensive documentation detailing the design process"
    ]

    return (
        <TemplateProject {...project} />
    );
}


export default SlotMachine;