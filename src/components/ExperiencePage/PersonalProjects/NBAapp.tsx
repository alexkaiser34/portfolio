import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import NbaImage from '../../../images/nba.png';


function NBAapp(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'NBA Data Tracker Web Application';

    project.alignment = "right";

    project.projectTimeline = "August 2023 - Present";

    project.projectDescription = `
        I worked on this project individually. The goal of this project
        was to practice more advanced concepts of React, SQL, TypeScript,
        Node.js, and Amazon Web Services. This project shows up to date NBA
        scores, along with player and team stats for past and current NBA
        seasons.  The user can interact with the application by creating an
        account. Then, they can create and add players or teams to their watch-lists
        to keep track of specific data.`;

    project.projectImage = NbaImage;

    project.projectRole = 'Individual - Full-stack Engineer';

    project.projectResponsibilities = [
        "Plan the flow of communication throughout the application",
        "Design data structures to be used by front-end, back-end, and database",
        "Host application using Amazon Web Services",
        "Design and communicate with an AWS hosted mySQL database",
        "Design and test the front-end of the application",
        "Design and test the back-end of the application"
    ]

    project.projectContributions = [
        "Created and configured AWS to host a mySQL database",
        "Created and configured AWS to host the back-end of the application",
        "Designed the back-end to preform API requests daily to store new data in the database",
        "Designed and created RESTful API for front-end to database communication",
        "Designed and tested various components for the front-end",
        "Implemented some advanced capabilities of ReactJS"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default NBAapp;