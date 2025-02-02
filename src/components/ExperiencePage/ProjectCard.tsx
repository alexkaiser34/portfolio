import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { ProjectType } from "./getProjects";
import TemplateProject from "./TemplateProject";

interface ProjectCardProps {
    project: ProjectType
}


function ProjectCard(props: ProjectCardProps) {

    const [show, setShow] = useState(false);
    const handleClick = () => {
      setShow(true);
    }

    const ModalCard = () => {
      return (
        <Modal className="card-modal" fullscreen={true} show={show} onHide={() => setShow(false)}>
          <Modal.Header className="card-modal-header" closeButton> 
            <Modal.Title>{props.project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="card-modal-body">
              <TemplateProject project={props.project} />
          </Modal.Body>
        </Modal>

      )
    }

    return (
      <>
        <Card className="project-card text-center" key={props.project.title} >
          <Card.Img variant="top" src={props.project.image} style={{
            padding: '10px 10px',
            maxHeight: 'max(130px, 10vw)',
            width: 'auto',
            margin: 'auto'
          }}/>
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold', color: 'lightgreen'}}>{props.project.title}</Card.Title>
            <Card.Text>
              {props.project.shortDescription}
            </Card.Text>
            <Button id="card-button" onClick={handleClick}>View Project</Button>
          </Card.Body>
        </Card>
        <ModalCard />
      </>
    );
}

export default ProjectCard;