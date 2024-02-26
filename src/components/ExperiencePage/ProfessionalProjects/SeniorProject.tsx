import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import SeniorProjectImage from '../../../images/DoomDemo.gif';


function SeniorProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'seL4 Doom Pendulum Demo';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - August 2023";

    project.projectDescription = `
        This was my senior project at Grand Valley State University.  I worked with a team
        of engineers to support the project customer: DornerWorks Ltd.
        The goal of this project was to provide DornerWorks Ltd with a visually
        appealing application to customers that shows off the isolation and security features of a hypervisor,
        specifically the seL4 hypervisor. The demo consisted of two virtual machines running
        on the same piece of hardware on top of the seL4 hypervisor.  One virtual machine balanced
        an inverted pendulum, while the other displayed the video game Chocolate Doom on a monitor. There was also a
        big red button in the demo that when pressed, shuts down the Doom virtual machine, while the inverted
        pendulum keeps balancing. This visually illustrates how the two virtual machines running on the same hardware 
        are completely isolated from one another due to the hypervisor.`;

    project.projectImage = SeniorProjectImage;

    project.projectRole = 'Project Manager';

    project.projectResponsibilities = [
        "Lead software and hardware engineer",
        "Led and managed a team of engineers to meet a variety of customer needs",
        "Organized and planned project timeline",
        "Preformed one-on-one and team meetings with the customer to better understand their needs",
        "Delegated tasks to the team to ensure project deadlines would be met",
        "Held numerous design presentations with various faculty and industry customers"
    ]

    project.projectContributions = [
        "Designed and researched a control algorithm to balance inverted pendulum",
        "Designed and prototyped a custom printed circuit board to add signal processing circuitry",
        "Configured the hardware description of an MPSoC (multiprocessor system on chip)",
        "Designed hardware drivers in VHDL and Verilog to communicate with various sensors using the AXI communication protocol",
        "Designed software drivers to communicate to the hardware drivers from a freeRTOS and linux virtual machine",
        "Created bootloader patches to add application functionality",
        "Configured an seL4 application to allow seL4 to manage a freeRTOS and linux virtual machine",
        "Completed project a month early and greatly satisfied the customer"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default SeniorProject;