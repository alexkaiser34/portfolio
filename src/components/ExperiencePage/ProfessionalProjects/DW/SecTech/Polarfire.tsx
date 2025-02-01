import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import RISCVImage from '../../../../../images/RISC-V.png';


function Polarfire(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'RISC-V Polarfire SoC seL4 Ethernet Driver';

    project.alignment = "left";

    project.projectTimeline = "January 2022 - May 2022";

    project.projectDescription = `
        This project was undertaken with the Secure Technologies group at DornerWorks Ltd.
        The objective was to develop an seL4 Ethernet driver for the Polarfire SoC (RISC-V Architecture).
        This driver would be utilized by various applications running in the seL4 environment.`;

    project.projectImage = RISCVImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Collaborate with the team to effectively develop solutions",
        "Participate in daily status meetings with the customer and the team",
        "Engage in one-on-one meetings with the customer to address specific issues"
    ]

    project.projectContributions = [
        "Created a development environment using Docker to build and run test applications",
        "Contributed to the implementation of sections of the Ethernet driver code",
        "Hosted individual meetings with the customer to assist in debugging issues",
        "Authored numerous bash/shell scripts for building and testing the application"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default Polarfire;