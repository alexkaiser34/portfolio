import TemplateProject, { TemplateProjectProps } from "../TemplateProject";
import CpuState from '../../../images/cpu-state.png';

function VhdlCPU(){
    const project:TemplateProjectProps = {} as TemplateProjectProps;

    project.projectTitle = 'VHDL CPU Design';

    project.alignment = "right";

    project.projectTimeline = "January 2023 - May 2023";

    project.projectDescription = `
        This project was undertaken as part of an FPGA class at GVSU, involving a team of two engineers.
        The objective was to design and implement a CPU using VHDL. The CPU was tasked with reading pregenerated opcodes stored in block RAM,
        performing tasks based on the opcode, fetching instructions and data from block RAM, using an arithmetic logic unit to execute the instructions,
        and storing the results back in block RAM. Additionally, the CPU controlled onboard peripherals such as a 7-segment display, LEDs, and pushbuttons
        based on the executed opcodes.`;

    project.projectImage = CpuState;

    project.projectRole = 'Academic - Software/FPGA Engineer';

    project.projectResponsibilities = [
        "Develop 8-bit opcodes and their corresponding operations",
        "Store opcodes and data in block RAM",
        "Design a VHDL CPU module to read block RAM and execute opcode instructions sequentially",
        "Implement an arithmetic logic unit to perform various operations on data",
        "Control onboard peripherals based on the executed instructions"
    ]

    project.projectContributions = [
        "Designed opcodes and data to be read by the CPU and stored in block RAM",
        "Developed a VHDL CPU module to fetch, decode, and execute instructions",
        "Implemented an arithmetic logic unit to perform operations on data",
        "Controlled onboard peripherals such as a 7-segment display, LEDs, and pushbuttons based on the executed opcodes"
    ]

    return (
        <TemplateProject {...project} />
    );

}


export default VhdlCPU;