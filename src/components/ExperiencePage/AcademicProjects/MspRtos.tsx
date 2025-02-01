import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import RtosImage from '../../../images/msp_rtos.png';

function MspRtos(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'MSP 432 Real Time Operating System';

    project.alignment = "right";

    project.projectTimeline = "August 2022 - December 2022";

    project.projectDescription = `
        This project was undertaken as part of an assembly/embedded systems class at GVSU, involving a team of two engineers.
        The objective was to utilize the MSP432 microcontroller to develop a multi-threaded real-time operating system using C and Assembly.
        The operating system was designed to control various onboard device peripherals and external sensors simultaneously.`;

    project.projectImage = RtosImage;

    project.projectRole = 'Academic - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Develop the kernel and operating system using C and Assembly",
        "Implement a round-robin scheduler using the SysTick timer to manage multiple threads",
        "Configure the system for proper context switching",
        "Control onboard LEDs, pushbuttons, and external LEDs from different threads",
        "Utilize locks to ensure thread synchronization"
    ]

    project.projectContributions = [
        "Developed a kernel and operating system to set up threads and run the scheduler",
        "Designed assembly code to handle context switching and store register values on the stack",
        "Implemented assembly code to distinguish between critical and non-critical sections of threads",
        "Enabled functionality of four threads to control various sensors simultaneously"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default MspRtos;