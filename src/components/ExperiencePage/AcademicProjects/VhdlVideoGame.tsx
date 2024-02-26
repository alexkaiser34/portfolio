import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import ElectricFish from '../../../images/electric-fish.png';


function VhdlVideoGame(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VHDL Video Game - Electric Groove Fish';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - May 2023";

    project.projectDescription = `
        I worked on this project on a team of 2 engineers as part of an 
        FPGA class at GVSU. The goal of this project was to 
        display and control the video game Electric Groove Fish. A HDMI port
        on the Basys3 FPGA board was used to connect to an external monitor 
        and display the video game.  On board pushbuttons were used to control 
        and move the fish around the screen. Multiple levels of the game can be played!`;

    project.projectImage = ElectricFish;

    project.projectRole = 'Academic - Software/FPGA Engineer';

    project.projectResponsibilities = [
        "Develop a VHDL driver to transmit data over an HDMI port",
        "Display a static background image for the video game",
        "Implement a state machine to control the logic flow of the video game",
        "Implement multiple levels of gameplay",
        "Read onboard pushbuttons so the user can control the video game"
    ]

    project.projectContributions = [
        "Developed a VHDL Module to transmit data over an HDMI port",
        "Developed a Python script to turn a PNG image file into 24 bit RGB values",
        "Stored RGB values of static background image in block RAM",
        "Created a state machine to control gameplay and determine whether or not the user has won the level",
        "Designed multiple levels of gameplay",
        "Created drivers to read pushbuttons and move the fish around the screen accordingly"
    ]

    return (
        <TemplateProject {...project} />
    );
}


export default VhdlVideoGame;