
import { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, ButtonGroup, Container } from 'react-bootstrap';
import './style.css';
import ProjectCard from './ProjectCard';
import { projectListPersonal, projectListProfessional } from './ProjectDescriptions';
import FadeAnimate from '../FadeAnimate';

type CategorySelect = "Personal" | "Professional";

function ExperiencePage(){

    const [category, setCategory] = useState<CategorySelect>("Professional");

    useEffect(() => {
        document.title = "Alex Kaiser - Experience";
     }, []);

     const ProjectCards = () => {
        if (category === "Professional"){
            return (
                <>
                    {projectListProfessional.map((project) => {
                        return (
                        <div className='col-12 col-md-6 col-lg-4 p-3 pb-5' key={project.title + '-card-wrapper'}>
                            {FadeAnimate({className: `card-${project.title}-animate-prof`, children:
                                <ProjectCard 
                                    title={project.title}
                                    image={project.image}
                                    component={project.component}
                                    decription={project.shortDescription}
                                />
                            })}
                        </div>
                        )
                    })}
                </>
            )
        }
        else {
            return (
                <>
                    {projectListPersonal.map((project) => {
                        return (
                        <div className='col-12 col-md-6 col-lg-4 p-3 pb-5' key={project.title + '-card-wrapper'}>
                            {FadeAnimate({className: `card-${project.title}-animate-pers`, children:
                                <ProjectCard 
                                    title={project.title}
                                    image={project.image}
                                    component={project.component}
                                    decription={project.shortDescription}
                                />
                            })}
                        </div>
                        )
                    })}
                </>
            )
        }
     }


    return (
        <div className='ExperiencePage-container'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 style={{paddingBottom: '15px', color: 'lightgreen'}}>{category.toString()} Projects</h1>
                <div className='d-flex w-75 justify-content-center pb-3'>
                    <ButtonGroup className='button-group-experience'>
                        <button style={{
                            backgroundColor: category === "Professional" ? 'lightgreen' : '',
                            color: category === "Professional" ? '#050e2f' : '',
                        }}
                        className="professional-button" 
                        onClick={() => {setCategory("Professional")}}>
                            Professional
                         </button>
                         <button style={{
                            backgroundColor: category === "Personal" ? 'lightgreen' : '',
                            color: category === "Personal" ? '#050e2f' : ''
                        }}
                        className="personal-button" onClick={() => {setCategory('Personal')}}>
                            Personal
                        </button>
                    </ButtonGroup>
                </div>
            </div>
                
            <Container fluid className='p-5'>
                <div className='row d-flex align-items-baseline justify-content-center'>
                    <ProjectCards />
                </div>
            </Container>
        </div>
    )
}


export default ExperiencePage;