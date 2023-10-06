import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import FlightImage from '../../../../../images/FlightDisplay.png';


function FlightDemo(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VxWorks Fight Vulnerability Demo';

    project.alignment = "right";

    project.projectTimeline = "January 2022 - May 2022";

    project.projectDescription = `
        For this project, I worked with a team of engineers in the Secure Technologies
        group at DornerWorks Ltd.  The goal of the first phase of this project was to implement
        a demo simulating a vulnerability in a flight software application.  This demo would
        show what could happen if applications run directly on hardware without a hypervisor. The next
        phase of the project was to integrate an application onto a hypervisor`;

    project.projectImage = FlightImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Collaborate with team to determine the best course of action",
        "Participate in daily status meetings with the customer and the team",
        "Develop a visual demo to simulate a vulnerability in flight software",
        "Develop using a tool called VxWorks"
    ]

    project.projectContributions = [
        "Created a TCP server and client demo application in C and Python",
        "Created a multi-threaded TCP server in C",
        "Created an application to simulate a vulnerability which would crash the demo",
        "Configured application to interact with a visual flight primary display"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default FlightDemo;