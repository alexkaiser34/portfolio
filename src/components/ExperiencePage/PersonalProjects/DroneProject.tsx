import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import DroneImage from '../../../images/DroneGif.gif';


function DroneProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Custom Drone Build and Configuration';

    project.alignment = "right";

    project.projectTimeline = "May 2020 - August 2020";

    project.projectDescription = `
        This individual project aimed to gain hands-on experience in building and wiring systems, as well as to become proficient with flight controllers.
        The project involved using the Pixhawk flight controller in combination with Ardupilot software to control and monitor the drone.
        Additionally, a camera was attached to capture in-flight video.`;

    project.projectImage = DroneImage;

    project.projectRole = 'Individual - Software/Hardware Engineer';

    project.projectResponsibilities = [
        "Build and construct a durable drone frame",
        "Configure the Pixhawk flight controller for drone operation",
        "Attach an external camera to capture in-flight video",
        "Ensure wiring and soldering can withstand harsh flying conditions"
    ]

    project.projectContributions = [
        "Built and constructed a durable carbon fiber drone frame",
        "Configured the Pixhawk flight controller for precise drone control",
        "Attached and integrated an external camera for in-flight video capture",
        "Ensured robust wiring and soldering to sustain harsh flying conditions"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default DroneProject;