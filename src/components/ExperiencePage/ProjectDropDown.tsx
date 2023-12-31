import { Dropdown } from "react-bootstrap";


interface ProjectDropDownProps {
    activeProject: any,
    setActiveProject: any,
    projectList: any[]
}

function ProjectDropDown(props: ProjectDropDownProps){

    return (
        <div className="project-drop-down-wrapper">
            <Dropdown>
                <Dropdown.Toggle id="custom-dropdown">{props.activeProject}</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu" style={{backgroundColor: '#050e2f'}}>
                    {
                        props.projectList.map((project) => {
                            return (
                                <Dropdown.Item
                                    onClick={() => {
                                        window.scrollTo(0,0);
                                        props.setActiveProject(project as string);
                                    }}
                                    key={"dropdown-item-" + project}
                                    active={props.activeProject === project ? true : false}
                                    style ={{
                                        backgroundColor: props.activeProject === project ? 'lightblue' : '#050e2f',
                                        color: props.activeProject === project ? '#050e2f' : 'lightgreen'

                                    }}
                                >
                                    {project}
                                </Dropdown.Item>
                            );
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default ProjectDropDown;