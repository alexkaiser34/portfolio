import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import RISCVImage from '../../../../../images/RISC-V.png';


function Polarfire(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'RISC-V Polarfire SoC seL4 Ethernet Driver';

    project.alignment = "left";

    project.projectTimeline = "January 2022 - May 2022";

    project.projectDescription = `
        For this project, I worked with a team of engineers in the Secure Technologies
        group at DornerWorks Ltd.  The goal of the project was to create an seL4 ethernet
        driver for the Polarfire SoC (RISC-V Architecture). This driver could then be used by various applications
        running in seL4.`;

    project.projectImage = RISCVImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Collaborate with team to effectively develop solutions",
        "Participate in daily status meetings with the customer and the team",
        "Participate in one on one meetings with the customer"
    ]

    project.projectContributions = [
        "Created a development environment for the team with Docker to build and run test applications",
        "Helped implement sections of ethernet driver code",
        "Hosted individual meetings with the customer to help them debug issues",
        "Wrote numerous bash/shell scripts for building and testing the application"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default Polarfire;