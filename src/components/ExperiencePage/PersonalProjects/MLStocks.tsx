import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import MLStocksImage from '../../../images/MLStocks.png';


function MLStocks(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Maching Learning Stock Price Desktop Application';

    project.alignment = "right";

    project.projectTimeline = "June 2022 - September 2022";

    project.projectDescription = `
        This individual project aimed to enhance my proficiency with React and TypeScript. 
        The project resulted in a cross-platform desktop application available for macOS, Ubuntu, and Windows. 
        The application displays real-time stock metrics for up to 50 stocks, along with machine learning price predictions for each. 
        The project was developed using React, TypeScript, Docker, the FinnHub API, Python, an Influx database, and a Raspberry Pi.`;

    project.projectImage = MLStocksImage;

    project.projectRole = 'Individual - Full-stack Engineer';

    project.projectResponsibilities = [
        "Plan the communication flow throughout the application",
        "Design data structures for the front-end, back-end, and database",
        "Create an application layout optimized for user interaction",
        "Develop all front-end components and containers",
        "Research and implement effective machine learning models for stock price prediction",
        "Design the back-end to perform machine learning and store external data in a database"
    ]

    project.projectContributions = [
        "Planned and implemented the communication flow throughout the application",
        "Designed and developed data structures for seamless integration between front-end, back-end, and database",
        "Created an intuitive and user-friendly application layout",
        "Developed comprehensive front-end components and containers",
        "Researched and integrated effective machine learning models for accurate stock price predictions",
        "Designed and implemented a robust back-end for machine learning and data storage"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default MLStocks;