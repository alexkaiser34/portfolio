import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import CpuState from '../../../images/cpu-state.png';

function VhdlCPU(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VHDL CPU Design';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - May 2023";

    project.projectDescription = `
        I worked on this project on a team of 2 engineers as part of an 
        FPGA class at GVSU. The goal of this project was to 
        create a CPU using VHDL. The CPU would read pregenerated opcodes stored 
        in block RAM and preform tasks depending on the opcode.  The CPU would fetch instructions and 
        data from block RAM, use an arithmetic logic unit to execute the instruction corresponding 
        to the opcode, and store the result back in block RAM.  The CPU would also control onboard 
        peripherals such as a 7 segment display, LEDs, and pushbuttons depending on the opcode 
        being executed.`;

    project.projectImage = CpuState;

    project.projectRole = 'Academic - Software/FPGA Engineer';

    project.projectResponsibilities = [
        "Develop 8 bit opcodes and what they represent",
        "Store opcodes and data in block RAM",
        "Design a CPU VHDL Module to read block RAM and execute opcode instructions sequentially",
        "Implement an arithmetic logic unit to preform different operations on data",
        "Control onboard peripherals depending on the instruction being executed"
    ]

    project.projectContributions = [
        "Designed opcodes and data to be read by the CPU and stored in block RAM",
        "Designed a VHDL CPU Module to fetch, decode, and execute instructions",
        "Designed an arithmetic logic unit to preform different operations on data",
        "CPU controlled a 7 segment display, LEDs, and read pushbuttons"
    ]

    return (
        <TemplateProject {...project} />
    );

}


export default VhdlCPU;