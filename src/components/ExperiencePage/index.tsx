
import { useEffect, useState } from 'react';
import { ButtonGroup, Container, Dropdown } from 'react-bootstrap';
import './style.css';
import ProjectCard from './ProjectCard';
import { ProjectType, getAllProjects } from './getProjects';

type CategorySelect = "Personal" | "Professional" | "Academic";

interface MonthDict {
    [key: string]: number;
}

const monthDict:MonthDict = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
}

function ExperiencePage(){

    const [category, setCategory] = useState<CategorySelect>("Professional");
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [company, setCompany] = useState<string>("All");
    const [availableCompanies, setCompanies] = useState<string[]>([]);

    useEffect(() => {
        document.title = "Alex Kaiser - Experience";
        getAllProjects()
        .then((data) => {
            const sortedData = data.sort((a, b) => {
                const aTimeline = a.timeline.split(" ");
                const bTimeLine = b.timeline.split(" ");

                if ((aTimeline.length < 4) || (bTimeLine.length < 4))
                {
                    return 0
                }

                const aYear = aTimeline[aTimeline.length - 1];
                const aMonth = aTimeline[aTimeline.length - 2];
                const bYear = bTimeLine[bTimeLine.length - 1];
                const bMonth = bTimeLine[bTimeLine.length - 2];

                if (bYear === "Present")
                {
                    return 1;
                }

                if (aYear === "Present")
                {
                    return -1;
                }

                if (Number(aYear) > Number(bYear))
                {
                    return -1;
                }
                else if (Number(bYear) > Number(aYear))
                {
                    return 1;
                }
                else
                {
                    if ((aMonth in monthDict) && (bMonth in monthDict))
                    {
                        if (monthDict[aMonth] > monthDict[bMonth])
                        {
                            return -1;
                        }
                        else
                        {
                            return 1;
                        }
                    }
                    else
                    {
                        return 0;
                    }
                }
            })
            setProjects(sortedData);
            let temp: string[] = []
            sortedData.forEach(project => {
                if (project.company)
                {
                    if (!(temp.includes(project.company)))
                    {
                        temp.push(project.company);
                    }
                }
            });
            temp.unshift("All");
            setCompanies(temp);
        })
        .catch((err) => console.log(err))
     }, []);

     const ProjectCards = () => {

        const projectsToShow = projects.filter((project) => {
            if (category === "Professional")
            {
                if (company === "All")
                {
                    return project.category === category
                }
                else
                {
                    return (project?.company === company) && (project.category === category)
                }
            }
            else {
                return project.category === category
            }
        });

        if (projectsToShow.length > 0)
        {
            return (
                <>
                {
                    projectsToShow.map((project) => {
                        return (
                            <div className='col-12 col-md-6 col-lg-4 p-3 pb-5' key={project.title + '-card-wrapper'}>
                                <ProjectCard project={project} />
                            </div>
                        )
                    })
                }
                </>
            )
        }
        else
        {
            return (
                <>
                <h1>Loading...</h1>
                </>
            )
        }
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

     const CompanyDropDown = () => {

        const handleDropDownClick = (company: string) => {
            setCompany(company);
        }

        return (
            <Dropdown className='companyDropDown'>
                <Dropdown.Toggle className='companyButton'>
                    {company}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{
                    backgroundColor: '#050e2f',
                    border: '2px solid lightgreen'
                }}>
                    {availableCompanies.map((company) => {
                        return (
                            <Dropdown.Item key={company} className={'companyDropDownItem ' + company} onClick={() => handleDropDownClick(company)}>
                                {company}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
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
            {
                category === "Professional" ?
                    <div className='d-flex flex-row justify-content-center align-items-center pt-4'>
                        <div className='d-flex flex-row align-items-center'>
                            <h3 className='pe-4' style={{padding: '15px', color: 'lightblue', fontWeight: 'bold'}}>Select Company: </h3>
                            <div>
                                {CompanyDropDown()}
                            </div>
                        </div>
                    </div>
                : <></>
            }
            <Container fluid className='p-5'>
                <div className='row d-flex align-items-baseline justify-content-center'>
                    <ProjectCards />
                </div>
            </Container>
        </div>
    )
}


export default ExperiencePage;