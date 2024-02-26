import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import AndroidImage from '../../../../../images/Android.png';


function AndroidProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'seL4 Android Device';

    project.alignment = "right";

    project.projectTimeline = "May 2021 - August 2021";

    project.projectDescription = `
        For this project, I worked with a team of engineers in the Secure Technologies
        group at DornerWorks Ltd.  The goal of this project was to run embedded virtual machines
        on top of the seL4 hypervisor on a custom android device.  A web server was also implemented
        to show various statistics of the device.`;

    project.projectImage = AndroidImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Collaborate with a large team of engineers to solve complex issues",
        "Participate in daily status meetings with the customer and the team",
        "Develop custom applications to satisfy customers needs",
        "Design various webserver components"
    ]

    project.projectContributions = [
        "Created a custom application to control the color of device LEDs which communicated with the webserver to show device statistics",
        "Created multiple components in webserver (C#, ASP.NET)",
        "Created various documentation for the customer",
        "Helped the team plan the best course of action for completing the project"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default AndroidProject;