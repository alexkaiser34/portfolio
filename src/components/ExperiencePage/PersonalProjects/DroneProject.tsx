import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import DroneImage from '../../../images/DroneGif.gif';


function DroneProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Custom Drone Build and Configuration';

    project.alignment = "right";

    project.projectTimeline = "May 2020 - August 2020";

    project.projectDescription = `

        I worked on this project individually. The goal of this project
        was to gain experience building and wiring systems. It was also
        to become more familiar with using a flight controller. This project
        uses the Pixhawk flight controller in combination with Ardupilot
        software to control and monitor the drone.  A camera was also attached
        to take in flight video.`;

    project.projectImage = DroneImage;

    project.projectRole = 'Individual - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Build and construct durable drone frame",
        "Configure Pixhawk flight controller to control drone",
        "Attach external camera to view flight video",
        "Ensure wiring and soldering can sustain harsh flying conditions"
    ]

    project.projectContributions = [
        "Built and constructed durable carbon fiber drone frame",
        "Configured Ardupilot software to correctly monitor and control the drone",
        "Placed external camera on drone for video (I have some cool views!)",
        "Neatly wired and solders all wires throughout the drone"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default DroneProject;