import FadeAnimate from "../FadeAnimate";

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

    const PictureElement = ():JSX.Element => {

        return props.alignment === "right" ? (
            <div className="template-project-about-image" style={{
                paddingRight: props.alignment === "right" ? '40px' : ''
            }}>
                <div className="template-project-about">
                    <h1>About the project...</h1>
                    <p>{props.projectDescription}</p>
                </div>
                <div className="template-project-img">
                    <img src={props.projectImage} alt={props.projectTitle} />
                </div>
            </div>
        ) : (
            <div className="template-project-about-image" style={{
                paddingLeft: props.alignment === "left" ? '40px' : ''
            }}>
                <div className="template-project-img">
                    <img src={props.projectImage} alt={props.projectTitle} />
                </div>
                <div className="template-project-about">
                    <h1>About the project...</h1>
                    <p>{props.projectDescription}</p>
                </div>
            </div>
        )
    }

    const DescriptionElement = ():JSX.Element => {

        return props.alignment === "right" ? (
            <div className="template-project-description" style={{
                paddingRight: props.alignment === "right" ? '40px' : ''
            }}>
                <div className="template-project-role">
                    <h1>Role: {props.projectRole}</h1>
                    <ul>
                        {props.projectResponsibilities.map(item => <li key={`resp-${item as string}`}>{item}</li>)}
                    </ul>
                </div>
                <div className="template-project-contributions">
                    <h1>Technical Accomplishments</h1>
                    <ul>
                        {props.projectContributions.map(item => <li key={`cont-${item as string}`}>{item}</li>)}
                    </ul>
                </div>
            </div>
        ) : (
            <div className="template-project-description" style={{
                paddingLeft: props.alignment === "left" ? '40px' : ''
            }}>
                <div className="template-project-contributions">
                    <h1>Technical Accomplishments</h1>
                    <ul>
                        {props.projectContributions.map(item => <li key={`cont-${item as string}`}>{item}</li>)}
                    </ul>
                </div>
                <div className="template-project-role">
                    <h1>Role: {props.projectRole}</h1>
                    <ul>
                        {props.projectResponsibilities.map(item => <li key={`resp-${item as string}`}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )

    }

    return (
        <div className="template-project" id={`template-project-${props.projectTitle}`}>
            {FadeAnimate({className: 'template-project-title', children:
                <>
                    <h1>{props.projectTitle}</h1>
                    <h2>{props.projectTimeline}</h2>
                </>
            })}
            <div className="template-project-content">
                {FadeAnimate({className: 'template-pic-wrapper', children: <PictureElement />})}
                {FadeAnimate({className: 'template-desc-wrapper', children: <DescriptionElement />})}
            </div>
        </div>
    );
}


export default TemplateProject;