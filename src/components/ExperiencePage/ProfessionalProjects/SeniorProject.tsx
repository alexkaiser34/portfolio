import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import SeniorProjectImage from '../../../images/DoomDemo.gif';


function SeniorProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'seL4 Doom Pendulum Demo';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - August 2023";

    project.projectDescription = `
        This senior project at Grand Valley State University was conducted in collaboration with DornerWorks Ltd.
        The objective was to create a visually appealing demonstration to showcase the isolation and security features of the seL4 hypervisor.
        The demo featured two virtual machines running on the same hardware: one balancing an inverted pendulum and the other displaying the video game Chocolate Doom.
        A red button in the demo, when pressed, would shut down the Doom virtual machine while the inverted pendulum continued to balance,
        illustrating the isolation provided by the hypervisor.`;

    project.projectImage = SeniorProjectImage;

    project.projectRole = 'Project Manager';

    project.projectResponsibilities = [
        "Lead software and hardware engineer",
        "Managed and led a team of engineers to meet customer requirements",
        "Organized and planned the project timeline",
        "Conducted one-on-one and team meetings with the customer to understand their needs",
        "Delegated tasks to ensure project deadlines were met"
    ]

    project.projectContributions = [
        "Led the development and implementation of both software and hardware components",
        "Managed a team of engineers to successfully meet diverse customer requirements",
        "Organized and planned the project timeline to ensure timely completion",
        "Conducted regular meetings with the customer to align project goals with their needs",
        "Delegated tasks effectively to ensure all project milestones were achieved"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default SeniorProject;