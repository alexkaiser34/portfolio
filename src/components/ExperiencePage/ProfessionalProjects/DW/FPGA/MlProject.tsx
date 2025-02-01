import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import FpgaImage from '../../../../../images/fpga.png';


function MlProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'ML/AI Algorithm Acceleration';

    project.alignment = "right";

    project.projectTimeline = "August 2022 - January 2023";

    project.projectDescription = `
        This project was undertaken during my tenure as a software engineer co-op
        for the FPGA group at DornerWorks Ltd. The objective was to accelerate the performance
        of various machine learning and artificial intelligence algorithms. My role involved
        translating algorithms written in interpreted languages, such as Python, into compiled languages,
        specifically C++. Subsequently, I converted the C++ code into VHDL (Very High Speed Integrated Circuit Hardware Description Language)
        to enhance the performance of these algorithms.`;

    project.projectImage = FpgaImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Lead engineer on the translation of specific algorithms",
        "Communicate with team and customers to provide project status updates",
        "Lead team in specific areas of software development",
        "Enhance the speed and performance of various algorithms"
    ]

    project.projectContributions = [
        "Served as the lead engineer for the translation of specific algorithms",
        "Effectively communicated project status updates to team members and customers",
        "Led the team in key areas of software development",
        "Significantly enhanced the speed and performance of various algorithms"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default MlProject;