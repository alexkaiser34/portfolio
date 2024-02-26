import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import RtosImage from '../../../images/msp_rtos.png';

function MspRtos(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'MSP 432 Real Time Operating System';

    project.alignment = "right";

    project.projectTimeline = "August 2022 - December 2022";

    project.projectDescription = `

        I worked on this project on a team of 2 engineers as part of an 
        assembly/embedded systems class at GVSU. The goal of this project was to use 
        the MSP432 microcontroller to create a multi-threaded real time operating system using C and 
        Assembly.  The real time operating system would allow the user to control various 
        onboard device peripherals and external sensors simultaneously.`;

    project.projectImage = RtosImage;

    project.projectRole = 'Academic - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Create the kernel and operating system using C and Assembly",
        "Create a round robin scheduler using the SysTick timer to run multiple threads",
        "Configure the system to context switch properly",
        "Control onboard LEDs, pushbuttons, and external LEDs from different threads",
        "Use locks to ensure thread synchronization"
    ]

    project.projectContributions = [
        "Created a kernel and operating system to setup threads and run the scheduler",
        "Designed assembly to handle context switching and store register values on the stack",
        "Designed assembly to decipher critical and non critical sections of threads",
        "Implemented functionality of 4 threads to control various sensors simultaneously"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default MspRtos;