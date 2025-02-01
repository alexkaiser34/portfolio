import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import VMComposerImage from '../../../../../images/VMComposer.jpg';


function VMComposer(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VMComposer';

    project.alignment = "left";

    project.projectTimeline = "January 2022 - May 2022";

    project.projectDescription = `
        This project involved working independently on enhancements to a DornerWorks tool called VMComposer.
        VMComposer allows customers to create and configure the layout of embedded applications that run on
        top of the seL4 hypervisor using a graphical user interface. This desktop application utilizes React, TypeScript, and Electron.
        My contributions spanned both the front-end and back-end of the application.`;


    project.projectImage = VMComposerImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Design new front-end features to improve user experience",
        "Fix existing front-end bugs and tests",
        "Design new back-end features",
        "Fix existing back-end bugs and tests"
    ]

    project.projectContributions = [
        "Designed and implemented new front-end features to enhance user experience",
        "Resolved various front-end bugs and improved test coverage",
        "Developed new back-end features to extend application functionality",
        "Fixed multiple back-end bugs and enhanced test coverage"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default VMComposer;