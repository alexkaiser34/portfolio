import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import AndroidImage from '../../../../../images/Android.png';


function AndroidProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'seL4 Android Device';

    project.alignment = "right";

    project.projectTimeline = "May 2021 - August 2021";

    project.projectDescription = `
        This project was undertaken with the Secure Technologies group at DornerWorks Ltd.
        The objective was to run embedded virtual machines on top of the seL4 hypervisor on a custom Android device.
        Additionally, a web server was implemented to display various statistics of the device.`;

    project.projectImage = AndroidImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Collaborate with a large team of engineers to solve complex issues",
        "Participate in daily status meetings with the customer and the team",
        "Develop custom applications to meet customer requirements",
        "Design various web server components"
    ]

    project.projectContributions = [
        "Developed a custom application to control the color of device LEDs, which communicated with the web server to display device statistics",
        "Created multiple components for the web server using C# and ASP.NET",
        "Authored comprehensive documentation for the customer",
        "Assisted the team in planning the best course of action for project completion"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default AndroidProject;