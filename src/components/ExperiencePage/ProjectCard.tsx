import React, { useState } from "react";
import { Card, Button, Modal, Container } from "react-bootstrap";

interface ProjectCardProps {
    title: string,
    decription: string,
    component: JSX.Element,
    image?: string
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
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="card-modal-body">
              {props.component}
          </Modal.Body>
        </Modal>

      )
    }

    return (
      <>
        <Card className="project-card text-center" >
          <Card.Img variant="top" src={props.image} style={{
            padding: '10px 10px',
            maxHeight: 'max(130px, 10vw)',
            width: 'auto',
            margin: 'auto'
          }}/>
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold', color: 'lightgreen'}}>{props.title}</Card.Title>
            <Card.Text>
              {props.decription}
            </Card.Text>
            <Button id="card-button" onClick={handleClick}>View Project</Button>
          </Card.Body>
        </Card>
        <ModalCard />
      </>
    );
}

export default ProjectCard;