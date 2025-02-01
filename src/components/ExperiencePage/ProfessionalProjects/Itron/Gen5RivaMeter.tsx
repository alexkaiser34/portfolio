import TemplateProject, { TemplateProjectProps } from "../../TemplateProject";

import Gen5RivaMeterImage from '../../../../images/Gen5RivaMeter.jpg';


function Gen5RivaMeter(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Gen5RivaMeter Alternate LCD Display';

    project.alignment = "left";

    project.projectTimeline = "June 2024 - September 2024";

    project.projectDescription = `
        This project entailed the design and implementation of an alternate LCD display interface for Itron's Gen5Riva Electric Meter.
        The objective was to develop a virtual display that mirrors the real-time data shown on the meter's physical LCD screen.
        This interface was intended for use by the software team within various applications.
        Responsibilities included translating project requirements into functional code, developing an embedded application in C++,
        and creating a comprehensive design document for presentation to senior management.`;

    project.projectImage = Gen5RivaMeterImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Translate project requirements into functional code",
        "Design and develop an embedded C++ application to capture data from the physical LCD screen",
        "Create and present a detailed design document to senior management",
        "Collaborate with the software team to ensure design constraints are met"
    ]

    project.projectContributions = [
        "Developed a robust solution to capture and display real-time data from the physical LCD screen",
        "Ensured seamless integration of the virtual display interface within existing software applications",
        "Presented the design and implementation plan to senior management, facilitating informed decision-making"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default Gen5RivaMeter;