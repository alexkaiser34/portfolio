import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import FlightImage from '../../../../../images/FlightDisplay.png';


function FlightDemo(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VxWorks Fight Vulnerability Demo';

    project.alignment = "right";

    project.projectTimeline = "January 2022 - May 2022";

    project.projectDescription = `
        This project was undertaken with the Secure Technologies group at DornerWorks Ltd. 
        The goal of the first phase was to implement a demo simulating a vulnerability in a flight software application, 
        demonstrating potential risks when applications run directly on hardware without a hypervisor. 
        The next phase involved integrating the application onto a hypervisor to mitigate these risks.`;

    project.projectImage = FlightImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Collaborate with the team to determine the best course of action",
        "Participate in daily status meetings with the customer and the team",
        "Develop a visual demo to simulate a vulnerability in flight software",
        "Utilize VxWorks for software development"
    ]

    project.projectContributions = [
        "Developed a TCP server and client demo application in C and Python",
        "Created a multi-threaded TCP server in C",
        "Developed an application to simulate a vulnerability that would crash the demo",
        "Integrated the application onto a hypervisor to demonstrate enhanced security"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default FlightDemo;