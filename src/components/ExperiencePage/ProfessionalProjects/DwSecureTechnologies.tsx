import { Android } from "react-bootstrap-icons";
import AndroidProject from "./DW/SecTech/AndroidProject";
import FlightDemo from "./DW/SecTech/FlightDemo";
import Polarfire from "./DW/SecTech/Polarfire";
import VMComposer from "./DW/SecTech/VMComposer";



function DwSecureTechnologies(){


    return (
        <div className="secure-technologies-wrapper">
            <VMComposer />
            <hr className="project-divider" />
            <AndroidProject />
            <hr className="project-divider" />
            <Polarfire />
            <hr className="project-divider" />
            <FlightDemo />
        </div>
    );
}


export default DwSecureTechnologies;