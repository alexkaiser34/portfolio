
import TemplateProject, { TemplateProjectProps } from "../TemplateProject";

import DotnetImage from '../../../images/dotnetImage.jpeg';


function SportsBetApp(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'NFL Sports Betting Web Application';

    project.alignment = "right";

    project.projectTimeline = "August 2023 - December 2023";

    project.projectDescription = `
        This project was undertaken with a team of engineers from Grand Valley State University.
        The objective was to create a web application that displays various bets and odds for upcoming NFL games.
        Users can interact with the application by creating an account and tracking their own bets.
        The application provides insights into potential profits from each bet and tracks the user's lifetime profit or loss.
        The application is hosted on Amazon Web Services.`;

    project.projectImage = DotnetImage;

    project.projectRole = 'Project Manager';

    project.projectResponsibilities = [
        "Lead a team of engineers to ensure project deadlines are met",
        "Research and strategize the integration of various technologies into the application",
        "Create and delegate tasks to team members",
        "Host presentations for classmates and faculty to provide project updates",
        "Design the infrastructure of the full-stack application"
    ]

    project.projectContributions = [
        "Led a team of engineers to meet project deadlines",
        "Researched and strategized the integration of various technologies into the application",
        "Created and delegated tasks to team members",
        "Hosted presentations for classmates and faculty to provide project updates",
        "Designed the infrastructure of the full-stack application"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default SportsBetApp;