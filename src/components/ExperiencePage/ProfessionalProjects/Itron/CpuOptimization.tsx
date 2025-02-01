import TemplateProject, { TemplateProjectProps } from "../../TemplateProject";

import CpuOptimizationImage from '../../../../images/CpuOptimization.jpg';


function CpuOptimization(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'Gen5RivaMeter CPU Profiling and Optimization';

    project.alignment = "left";

    project.projectTimeline = "April 2024 - December 2024";

    project.projectDescription = `
        This project focused on profiling and optimizing the CPU performance of Itron's Gen5Riva Electric Meter.
        The primary objective was to identify and address potential inefficiencies within the codebase.
        To achieve this, internal desktop applications were utilized to extract real-time data from electronic meters,
        enabling detailed analysis of CPU usage at the process level. Additionally, profiling tools such as Callgrind
        were employed to measure the number of instructions executed per function call throughout the codebase.
        The collected data was meticulously analyzed and presented to senior management, providing critical insights
        to prioritize areas for optimization in the forthcoming release.`;


    project.projectImage = CpuOptimizationImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Utilized various profiling tools to identify CPU hot spots within the codebase",
        "Configured and employed desktop applications to extract and analyze data from electronic meters",
        "Presented detailed findings to senior management to inform strategic decision-making for future requirements"
    ]

    project.projectContributions = [
        "Conducted comprehensive profiling of the codebase at both process and function levels to identify optimization opportunities",
        "Collaborated with cross-functional teams to establish and execute CPU profiling tests on their respective codebases",
        "Delivered insightful presentations to senior management, aiding in the planning and prioritization of future development efforts"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default CpuOptimization;