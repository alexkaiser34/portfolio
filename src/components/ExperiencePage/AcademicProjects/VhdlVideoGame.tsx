import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import ElectricFish from '../../../images/electric-fish.png';


function VhdlVideoGame(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VHDL Video Game - Electric Groove Fish';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - May 2023";

    project.projectDescription = `
        This project was undertaken as part of an FPGA class at GVSU, involving a team of two engineers.
        The objective was to design and implement the video game Electric Groove Fish using VHDL.
        The game was displayed on an external monitor via an HDMI port on the Basys3 FPGA board, and controlled using onboard pushbuttons.
        Multiple levels of gameplay were implemented to enhance the user experience.`;

    project.projectImage = ElectricFish;

    project.projectRole = 'Academic - Software/FPGA Engineer';

    project.projectResponsibilities = [
        "Develop a VHDL driver to transmit data over an HDMI port",
        "Display a static background image for the video game",
        "Implement a state machine to control the logic flow of the video game",
        "Implement multiple levels of gameplay",
        "Read onboard pushbuttons to enable user control of the video game"
    ]

    project.projectContributions = [
        "Developed a VHDL module to transmit data over an HDMI port",
        "Created a Python script to convert PNG images into 24-bit RGB values",
        "Stored RGB values of static background images in block RAM",
        "Implemented a state machine to manage game logic and transitions",
        "Enabled user interaction through onboard pushbuttons for game control"
    ]

    return (
        <TemplateProject {...project} />
    );
}


export default VhdlVideoGame;