
import { useEffect, useState } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import './style.css';
import ProjectCard from './ProjectCard';
import { projectListPersonal, projectListProfessional, projectListAcademic} from './ProjectDescriptions';

type CategorySelect = "Personal" | "Professional" | "Academic";

function ExperiencePage(){

    const [category, setCategory] = useState<CategorySelect>("Professional");

    useEffect(() => {
        document.title = "Alex Kaiser - Experience";
     }, []);

     const ProjectCards = () => {
        const experienceList = category === "Professional" ? projectListProfessional :
            category === "Personal" ? projectListPersonal :
            projectListAcademic;

        return (
            <>
            {
                experienceList.map((project) => {
                    return (
                        <div className='col-12 col-md-6 col-lg-4 p-3 pb-5' key={project.title + '-card-wrapper'}>
                            <ProjectCard 
                                title={project.title}
                                image={project.image}
                                component={project.component}
                                decription={project.shortDescription}
                            />
                        </div>
                    )
                })
            }
            </>
        )
     }

     const ExperienceButton = (c: CategorySelect) => {
        return (
            <button style={{
                backgroundColor: category === c ? 'lightgreen' : '',
                color: category === c ? '#050e2f' : '',
            }}
            className={`${c}-button`}
            onClick={() => {setCategory(c)}}>
                {c}
             </button>
        )
     }

    return (
        <div className='ExperiencePage-container'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 style={{paddingBottom: '15px', color: 'lightgreen'}}>{category.toString()} Projects</h1>
                <div className='d-flex w-75 justify-content-center pb-3'>
                    <ButtonGroup className='button-group-experience'>
                        {ExperienceButton("Professional")}
                        {ExperienceButton("Personal")}
                        {ExperienceButton("Academic")}
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