import FadeAnimate from "../FadeAnimate";
import { Container, Image } from "react-bootstrap";
import { ProjectType } from "./getProjects";

type alignmentType = "right" | "left";

export interface TemplateProjectProps {
    project: ProjectType

}
function TemplateProject(props: TemplateProjectProps){

    return (
        <Container fluid className="template-container">
            <div className="row d-flex align-items-center pt-2">
                <div className="col-12 d-flex justify-content-center">
                    {FadeAnimate({className: 'template-date', children:
                        <h3 style={{color: 'lightblue'}}>{props.project.timeline}</h3>
                    })}
                </div>
            </div>
                {FadeAnimate({className: "template-first-row", children:
                <div className="row d-flex align-items-center pt-4">

                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="d-flex flex-column align-items-center" style={{textAlign: 'center'}}>
                                <h2>About the project...</h2>
                                <p>{props.project.LongDescription}</p>
                            </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div className="template-project-img align-items-center justify-content-center">
                            <Image fluid src={props.project.image} alt={props.project.title} />
                        </div>
                    </div>
                    </div>
            })}
            {FadeAnimate({className: "template-second-row", children:

            <div className="row d-flex align-items-baseline pt-5">
                 <div className="col-12 col-lg-6 d-flex">
                    <div className="d-flex flex-column">
                        <h2>Role: {props.project.role}</h2>
                        <ul>
                            {props.project.responsibilities.map(item => <li key={`resp-${item as string}`}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex">
                    <div className="d-flex flex-column">
                        <h2>Technical Accomplishments</h2>
                        <ul>
                            {props.project.contributions.map(item => <li key={`cont-${item as string}`}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            })}
        </Container>
    );
}


export default TemplateProject;