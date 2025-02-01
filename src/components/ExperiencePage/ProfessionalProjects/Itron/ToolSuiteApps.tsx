import TemplateProject, { TemplateProjectProps } from "../../TemplateProject";

import DesktopAppImage from '../../../../images/desktopApp.jpg';


function ToolSuiteApps(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'ASP.NET Core Itron Engineer Desktop Applications';

    project.alignment = "left";

    project.projectTimeline = "April 2024 - Present";

    project.projectDescription = `
    This project involved the design and enhancement of various desktop applications using the ASP.NET Core Framework.
    These applications are utilized by software engineers at Itron Inc. for data extraction and debugging purposes.
    My contributions included implementing features to facilitate the extraction and analysis of new data, optimizing
    the data retrieval speed from electronic meters, and assisting in the establishment of a CI pipeline to automate
    the build and deployment process for the application.`;

    project.projectImage = DesktopAppImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Optimize multiple desktop applications for improved performance",
        "Implement features to enable tracking and analysis of new data",
        "Collaborate with cross-functional teams to ensure comprehensive data tracking",
        "Assist in setting up a CI pipeline for automated build and deployment"
    ]

    project.projectContributions = [
        "Enhanced desktop applications to support additional data tracking and analysis",
        "Optimized application performance by reducing database query overhead",
        "Facilitated cross-team communication to ensure accurate data tracking",
        "Contributed to the setup of a CI pipeline to streamline the build and deployment process"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default ToolSuiteApps;