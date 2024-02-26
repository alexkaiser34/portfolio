import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import DashboardImage from '../../../images/dashboard.gif';


function CarDashboard(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Embedded Car Dashboard';

    project.alignment = "right";

    project.projectTimeline = "August 2021 - December 2021";

    project.projectDescription = `

        I worked on this project on a team of 2 engineers as part of an 
        embedded systems class at GVSU. The goal of this project was to use 
        the MSP432 microcontroller to create an embedded system that represents 
        a car dashboard.  The dashboard had an interactive OLED display, speedometer, 
        and odometer.  It could also be interacted with over bluetooth from an app on a smart phone.`;

    project.projectImage = DashboardImage;

    project.projectRole = 'Academic - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Build, wire, and construct a dashboard frame",
        "Detect the speed of a motor using a sensor",
        "Implement a state machine to control the logic of the dashboard",
        "Use bluetooth to interact with the dashboard with a smart device",
        "Develop an interactive display to show car and speed statistics"
    ]

    project.projectContributions = [
        "Built, wired, and constructed a durable dashboard frame",
        "Created a state machine to control the overall program flow of the dashboard",
        "Designed a bluetooth driver to communicate with smart devices over bluetooth",
        "Designed an SPI driver to interact with an OLED display using the SPI communication protocol"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default CarDashboard;