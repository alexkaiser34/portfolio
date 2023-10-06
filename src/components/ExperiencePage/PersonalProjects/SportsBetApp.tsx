
import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import DotnetImage from '../../../images/dotnetImage.jpeg';


function SportsBetApp(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'NFL Sports Betting Web Application';

    project.alignment = "right";

    project.projectTimeline = "August 2023 - Present";

    project.projectDescription = `

        I worked on this project with a team of engineers from Grand Valley
        State Universtiy. The goal of the project is to create a web application
        that displays different bets and odds for upcoming NFL games.  The user
        can interact with this application by creating an account and tracknig
        their own bets.  They will be able to see how much profit they can make
        from each bet, and will be able to see their lifetime profit or loss. The
        application will be hosted by Amazon Web Services.`;

    project.projectImage = DotnetImage;

    project.projectRole = 'Project Manager';

    project.projectResponsibilities = [
        "Lead team of engineers to ensure project deadlines are being meet",
        "Research and strategize a plan to incorporate various technologies into this application",
        "Create and delegate tasks for each member of the team",
        "Host presentations with classmates and faculty providing updates on the project",
        "Design the infrastructure of the full-stack application"
    ]

    project.projectContributions = [
        "Created an ASP.NET MVC core web application",
        "Created an ASP.NET Web API to communicate to an Amazon DynamoDB",
        "Created a Node.js backend to communicated with a database and external API",
        "Designed models, views, and controllers for the core web application",
        "Communicated with team to ensure deadlines will be met",
        "Hosted team meetings to strategize ideas"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default SportsBetApp;