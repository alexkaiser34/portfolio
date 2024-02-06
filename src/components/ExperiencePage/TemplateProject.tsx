import FadeAnimate from "../FadeAnimate";
import { Container, Image } from "react-bootstrap";

type alignmentType = "right" | "left";

export interface TemplateProjectProps {
    projectTitle: string,
    projectImage: string,
    projectRole: string,
    projectDescription: string,
    projectTimeline: string,
    projectResponsibilities: string[],
    projectContributions: string[],
    alignment: alignmentType

}
function TemplateProject(props: TemplateProjectProps){

    return (
        <Container fluid className="template-container">
            <div className="row d-flex align-items-center pt-2">
                <div className="col-12 d-flex justify-content-center">
                    {FadeAnimate({className: 'template-date', children:
                        <h3 style={{color: 'lightblue'}}>{props.projectTimeline}</h3>
                    })}
                </div>
            </div>
                {FadeAnimate({className: "template-first-row", children:
                <div className="row d-flex align-items-center pt-4">

                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="d-flex flex-column align-items-center" style={{textAlign: 'center'}}>
                                <h2>About the project...</h2>
                                <p>{props.projectDescription}</p>
                            </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div className="template-project-img align-items-center justify-content-center">
                            <Image fluid src={props.projectImage} alt={props.projectTitle} />
                        </div>
                    </div>
                    </div>
            })}
            {FadeAnimate({className: "template-second-row", children:

            <div className="row d-flex align-items-baseline pt-5">
                 <div className="col-12 col-lg-6 d-flex">
                    <div className="d-flex flex-column">
                        <h2>Role: {props.projectRole}</h2>
                        <ul>
                            {props.projectResponsibilities.map(item => <li key={`resp-${item as string}`}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex">
                    <div className="d-flex flex-column">
                        <h2>Technical Accomplishments</h2>
                        <ul>
                            {props.projectContributions.map(item => <li key={`cont-${item as string}`}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            })}
        </Container>
    );
}


export default TemplateProject;