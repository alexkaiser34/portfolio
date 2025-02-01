import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import DashboardImage from '../../../images/dashboard.gif';


function CarDashboard(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Embedded Car Dashboard';

    project.alignment = "right";

    project.projectTimeline = "August 2021 - December 2021";

    project.projectDescription = `
        This project was undertaken as part of an embedded systems class at GVSU, involving a team of two engineers.
        The objective was to utilize the MSP432 microcontroller to develop an embedded system simulating a car dashboard.
        The dashboard featured an interactive OLED display, speedometer, and odometer, and could be controlled via a smartphone app over Bluetooth.`;

    project.projectImage = DashboardImage;

    project.projectRole = 'Academic - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Construct and wire a durable dashboard frame",
        "Implement a sensor to detect motor speed",
        "Develop a state machine to manage dashboard logic",
        "Integrate Bluetooth functionality for smartphone interaction",
        "Design an interactive display to present car and speed statistics"
    ]

    project.projectContributions = [
        "Constructed and wired a robust dashboard frame",
        "Developed a state machine to manage the overall program flow",
        "Designed and implemented a Bluetooth driver for communication with smart devices"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default CarDashboard;