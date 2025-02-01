import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import NbaImage from '../../../images/nba.png';


function NBAapp(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'NBA Data Tracker Web Application';

    project.alignment = "right";

    project.projectTimeline = "November 2023 - January 2024";

    project.projectDescription = `
        This individual project aimed to practice advanced concepts of React, SQL, TypeScript, Node.js, and Amazon Web Services.
        The application displays up-to-date NBA scores, along with player and team statistics for past and current NBA seasons.
        Users can create an account to interact with the application, allowing them to create and add players or teams to their watch-lists for tracking specific data.`;

    project.projectImage = NbaImage;

    project.projectRole = 'Individual - Full-stack Engineer';

    project.projectResponsibilities = [
        "Plan the communication flow throughout the application",
        "Design data structures for the front-end, back-end, and database",
        "Host the application using Amazon Web Services",
        "Design and manage an AWS-hosted MySQL database",
        "Develop and test the front-end of the application",
        "Develop and test the back-end of the application"
    ]

    project.projectContributions = [
        "Planned and implemented the communication flow throughout the application",
        "Designed and developed data structures for seamless integration between front-end, back-end, and database",
        "Hosted the application using Amazon Web Services",
        "Designed and managed an AWS-hosted MySQL database",
        "Developed and tested the front-end of the application",
        "Developed and tested the back-end of the application"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default NBAapp;