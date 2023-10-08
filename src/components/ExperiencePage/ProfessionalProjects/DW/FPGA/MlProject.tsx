import TemplateProject, { TemplateProjectProps } from "../../../TemplateProject";

import FpgaImage from '../../../../../images/fpga.png';


function MlProject(){

    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'ML/AI Algorithm Acceleration';

    project.alignment = "right";

    project.projectTimeline = "August 2022 - January 2023";

    project.projectDescription = `
        I worked on this project during my time as a software engineer co-op
        for the FPGA group at DornerWorks Ltd.  For this project, I worked
        with a team of engineers to help accelerate the performance of a few
        machine learning and artificial intelligence algorithms.  I was responsible
        for taking an algorithm written in a interpreted language, such as Python, and translating
        it to a compiled language, specifically C++. Then, I translated the C++ code
        to VHDL (very high speed integrated circuit hardware description language) to accelerate
        the performance of various algorithms`;

    project.projectImage = FpgaImage;

    project.projectRole = 'Software Engineer';

    project.projectResponsibilities = [
        "Lead engineer on translation of specific algorithms",
        "Communicate with team and customer to provide project status updates",
        "Led team in specific areas of software development",
        "Increase speed and performance of various algorithms"
    ]

    project.projectContributions = [
        "Created a development environment for the team by configuring a Docker image and container",
        "Created a debugger configuration allowing the team to debug C++ and python code at the same time",
        "Identified bottlenecks and areas for optimization throughout algorithm code",
        "Convert python code to C++, then to VHDL",
        "Configured hardware designs that run in an FPGA",
        "Developed embedded linux software applications to run the accelerated algorithm in a linux machine",
        "Accelerated the performance of an algorithm by a factor of 100"
    ]



    return (
        <TemplateProject {...project} />
    );
}


export default MlProject;