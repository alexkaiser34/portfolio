import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import MLStocksImage from '../../../images/MLStocks.png';


function MLStocks(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Maching Learning Stock Price Desktop Application';

    project.alignment = "right";

    project.projectTimeline = "June 2022 - September 2022";

    project.projectDescription = `
        I worked on this project individually.  The goal of this project was to
        better familiarize myself with React and TypeScript.  This project is a
        cross-platform desktop application that is supported for download
        on macOS, Ubuntu, and Windows.  It shows real time stock metrics for up
        to 50 stocks, along with machine learning price predictions for each. The project
        was designed using React, TypeScript, Docker, the FinnHub API, Python, an Influx database, and a
        raspberry pi.`

    project.projectImage = MLStocksImage;

    project.projectRole = 'Individual - Full-stack Engineer';

    project.projectResponsibilities = [
        "Plan the flow of communication throughout the application",
        "Design data structures to be used by the front-end, back-end, and database",
        "Design the application layout best suited for user interaction",
        "Develop all components and containers for the front-end",
        "Research which machine learning model are most effective for available data",
        "Design the back-end to preform machine learning and store external data in a database"
    ]

    project.projectContributions = [
        "Designed and implemented the back-end which has been running for over a year without fault in a docker container on a raspberry pi",
        "Designed and implemented all front-end components and made application available for download on GitHub",
        "Gained vast experience in full-stack engineering",
        "Gained numerous skills in front-end, database, and back-end development"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default MLStocks;