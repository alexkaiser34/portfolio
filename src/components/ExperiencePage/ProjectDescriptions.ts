import DroneProject from "./PersonalProjects/DroneProject";
import MLStocks from "./PersonalProjects/MLStocks";
import NBAapp from "./PersonalProjects/NBAapp";
import SlotMachine from "./PersonalProjects/SlotMachine";
import SportsBetApp from "./PersonalProjects/SportsBetApp";
import AndroidProject from "./ProfessionalProjects/DW/SecTech/AndroidProject";
import FlightDemo from "./ProfessionalProjects/DW/SecTech/FlightDemo";
import Polarfire from "./ProfessionalProjects/DW/SecTech/Polarfire";
import VMComposer from "./ProfessionalProjects/DW/SecTech/VMComposer";
import SeniorProject from "./ProfessionalProjects/SeniorProject";
import MlProject from "./ProfessionalProjects/DW/FPGA/MlProject";
import CarDashboard from "./AcademicProjects/CarDashboard";
import MspRtos from "./AcademicProjects/MspRtos";
import StmCarAlarm from "./AcademicProjects/StmCarAlarm";
import VhdlCPU from "./AcademicProjects/VhdlCPU";
import VhdlVideoGame from "./AcademicProjects/VhdlVideoGame";
import CpuOptimization from "./ProfessionalProjects/Itron/CpuOptimization";
import Gen5RivaMeter from "./ProfessionalProjects/Itron/Gen5RivaMeter";
import ToolSuiteApps from "./ProfessionalProjects/Itron/ToolSuiteApps";

import VMComposerImage from '../../images/VMComposer.jpg';
import SeniorProjectImage from '../../images/DoomDemo.gif';
import AndroidImage from '../../images/Android.png';
import FlightImage from '../../images/FlightDisplay.png';
import PolarfireImage from '../../images/RISC-V.png';
import MLStocksImage from '../../images/MLStocks.png';
import NbaImage from '../../images/nba.png';
import SportsBetImage from '../../images/dotnetImage.jpeg';
import DronerImage from '../../images/DroneGif.gif';
import SlotMachineImage from '../../images/SlotMachine.gif';
import FPGAImage from '../../images/fpga.png';
import CarDashboardImage from '../../images/dashboard.gif';
import MspRtosImage from '../../images/msp_rtos.png';
import PcbCarAlarm from '../../images/pcb-carAlarm.gif';
import CpuState from '../../images/cpu-state.png';
import ElectricFish from '../../images/electric-fish.png';
import CpuOptimizationImage from '../../images/CpuOptimization.jpg';
import Gen5RivaMeterImage from '../../images/Gen5RivaMeter.jpg';
import DesktopAppImage from '../../images/desktopApp.jpg';


interface ProjectCardData {
    title: string,
    shortDescription: string,
    category: string,
    role: string,
    image: string,
    component: JSX.Element
}

export const projectListAcademic:ProjectCardData[] = [
    {
        title: 'VHDL CPU Design',
        shortDescription: 'Developed a VHDL CPU module to control onboard peripherals and execute opcodes efficiently',
        category: 'FPGA/Software',
        role: 'Engineer',
        image: CpuState,
        component: VhdlCPU()
    },
    {
        title: 'MSP Real Time Operating System Design',
        shortDescription: 'Engineered a real-time operating system utilizing the MSP 432 microcontroller',
        category: 'Embedded Systems/Hardware',
        role: 'Engineer',
        image: MspRtosImage,
        component: MspRtos()
    },
    {
        title: 'Car Alarm System - PCB and Software Design',
        shortDescription: 'Designed a comprehensive PCB and embedded system for a car alarm using an STM32 MCU',
        category: 'Embedded Systems/Hardware',
        role: 'Engineer',
        image: PcbCarAlarm,
        component: StmCarAlarm()
    },
    {
        title: 'VHDL Video Game - Electric Groove Fish',
        shortDescription: 'Created the Electric Groove Fish video game in VHDL for execution on an FPGA platform',
        category: 'FPGA/Software',
        role: 'Engineer',
        image: ElectricFish,
        component: VhdlVideoGame()
    },
    {
        title: 'Embedded Car Dashboard',
        shortDescription: 'Created an embedded system with bluetooth to function as a car dashboard',
        category: 'Embedded Systems/Hardware',
        role: 'Engineer',
        image: CarDashboardImage,
        component: CarDashboard()
    }
];

export const projectListProfessional:ProjectCardData[] = [
    {
        title: 'Gen5RivaMeter CPU Profiling and Optimization',
        shortDescription: 'Profiled and optimized the CPU performance of Itron\'s Gen5Riva Electric Meter to identify and address inefficiencies.',
        category: 'Embedded Systems',
        role: 'Software Engineer',
        image: CpuOptimizationImage,
        component: CpuOptimization()
    },
    {
        title: 'Gen5RivaMeter Alternate LCD Display',
        shortDescription: 'Designed and implemented an alternate LCD display interface for Itron\'s Gen5Riva Electric Meter.',
        category: 'Embedded Systems',
        role: 'Software Engineer',
        image: Gen5RivaMeterImage,
        component: Gen5RivaMeter()
    },
    {
        title: 'ASP.NET Core Itron Engineer Desktop Applications',
        shortDescription: 'Designed and enhanced desktop applications using the ASP.NET Core Framework for data extraction and debugging.',
        category: 'Full Stack',
        role: 'Software Engineer',
        image: DesktopAppImage,
        component: ToolSuiteApps()
    },
    {
        title: 'seL4 Doom Pendulum Demo',
        shortDescription: 'Created an embedded application to run an inverted pendulum and video game' +
        ' on top of a hypervisor',
        category: 'Embedded Systems/FPGA/Hardware',
        role: 'Project Manager',
        image: SeniorProjectImage,
        component: SeniorProject()
    },
    {
        title: 'FPGA Algorithm Acceleration', 
        shortDescription: 'Converted an algorithm written in Python to a hardware description language (VHDL)' +
        ' to accelerate the algorithm\'s performance ',
        category: 'FPGA',
        image: FPGAImage,
        role: 'DornerWorks Project Engineer',
        component: MlProject()
    },
    {
        title: 'VxWorks Flight Simulation App', 
        shortDescription: 'Created an embedded client/server application to send simulated' +
        ' flight data across a local network',
        category: 'Embedded Systems',
        image: FlightImage,
        role: 'DornerWorks Project Engineer',
        component: FlightDemo()
    },
    {
        title: 'RISCV Ethernet Driver', 
        shortDescription: 'Helped design an ethernet driver for a hypervisor application using' +
        'hardware with a RISCV SoC',
        category: 'Embedded Systems',
        image: PolarfireImage,
        role: 'DornerWorks Project Engineer',
        component: Polarfire()
    },
    {
        title: 'VMComposer',
        shortDescription: 'Designed frontend/backend features for a desktop' +
        ' application where users can build apps to run on a hypervisor',
        category: 'Full Stack',
        image: VMComposerImage,
        role: 'DornerWorks Project Engineer',
        component: VMComposer()
    },
    {
        title: 'Embedded Android Device', 
        shortDescription: 'Designed application to interact with a webserver and control' +
        ' hardware peripherals of a custom Android device',
        category: 'Embedded Systems',
        image: AndroidImage,
        role: 'DornerWorks Project Engineer',
        component: AndroidProject()
    }
];

export const projectListPersonal:ProjectCardData[] = [
    {
        title: 'Machine Learning Stock App',
        shortDescription: 'Developed a full stack desktop application displaying real-time stock data with machine learning price predictions.',
        category: 'Full Stack',
        image: MLStocksImage,
        role: 'Product Owner',
        component: MLStocks()
    },
    {
        title: 'NBA App', 
        shortDescription: 'Designed a full stack application for tracking NBA players, teams, and stats for any season in the last 30 years.',
        category: 'Full Stack',
        image: NbaImage,
        role: 'Product Owner',
        component: NBAapp()
    },
    {
        title: 'Sports Betting App', 
        shortDescription: 'Created a web application for users to track, place, and monitor their sports betting history.',
        category: 'Full Stack',
        image: SportsBetImage,
        role: 'Project Manager',
        component: SportsBetApp()
    },
    {
        title: 'Drone', 
        shortDescription: 'Created a drone using the Ardupilot Software and Pixhawk Flight Controller',
        category: 'Embedded Systems',
        image: DronerImage,
        role: 'Product Owner',
        component: DroneProject()
    },
    {
        title: 'Slot Machine',
        shortDescription: 'Designed a slot machine using the TI-MSP432 microcontroller',
        category: 'Embedded Systems',
        image: SlotMachineImage,
        role: 'Academic Engineer',
        component: SlotMachine()
    }
];