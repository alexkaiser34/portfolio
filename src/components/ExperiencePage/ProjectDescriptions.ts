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



interface ProjectCardData {
    title: string,
    shortDescription: string,
    category: string,
    role: string,
    image: string,
    component: JSX.Element
}


export const projectListProfessional:ProjectCardData[] = [
    {
        title: 'seL4 Doom Pendulum Demo',
        shortDescription: 'Created an embedded application to run an inverted pendulum and video game' +
        ' on top of a hypervisor',
        category: 'Embedded Sytems/FPGA/Hardware',
        role: 'Project Manager',
        image: SeniorProjectImage,
        component: SeniorProject()
    },
    {
        title: 'Embedded Android Device', 
        shortDescription: 'Designed application to interact with a webserver and control' +
        ' hardware peripherals of a custom Android device',
        category: 'Embedded Systems',
        image: AndroidImage,
        role: 'DornerWorks Project Engineer',
        component: AndroidProject()
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
    }
];

export const projectListPersonal:ProjectCardData[] = [
    {
        title: 'Machine Learning Stock App',
        shortDescription: 'Created a full stack desktop application that displays real time stock data' +
        'along with machine learning price predictions',
        category: 'Full Stack',
        image: MLStocksImage,
        role: 'Product Owner',
        component: MLStocks()
    },
    {
        title: 'NBA App', 
        shortDescription: 'Designed a full stack application to allow users to track NBA players, teams,' +
        ' and stats for any NBA season in the last 30 years',
        category: 'Full Stack',
        image: NbaImage,
        role: 'Product Owner',
        component: NBAapp()
    },
    {
        title: 'Sports Betting App', 
        shortDescription: 'Created a web application to allow users to track, place, and monitor ' +
        'their sports betting history',
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