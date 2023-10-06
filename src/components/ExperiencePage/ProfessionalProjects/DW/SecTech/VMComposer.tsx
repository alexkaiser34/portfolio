import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import VMComposerImage from '../../../../../images/VMComposer.jpg';


function VMComposer(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VMComposer';

    project.alignment = "left";

    project.projectTimeline = "January 2022 - May 2022";

    project.projectDescription = `
        For this project, I worked
        alone on improvements to a DornerWorks tool called VMComposer.  This tool allows
        customers to create and configure the layout of embedded applications that run on
        top of the seL4 hypervisor using a graphical user interface. This tool is a desktop
        application using React, TypeScript, and Electron. I worked on both the front-end and
        the back-end of this application.`;


    project.projectImage = VMComposerImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Design new front-end features to improve user experience",
        "Fix existing front-end bugs and tests",
        "Design new back-end features",
        "Fix existing back-end bugs and tests"
    ]

    project.projectContributions = [
        "Fixed various back-end bugs in python",
        "Added unit tests for both the front-end and back-end",
        "Designed and created front-end components to improve layout and user interaction",
        "Helped configure a GitLab CI/CD pipeline",
        "Improved styling of various front-end components"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default VMComposer;