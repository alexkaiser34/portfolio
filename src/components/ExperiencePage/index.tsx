
import { useState } from 'react';
import { Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import './style.css';
import HomeExperience from './HomeExperience';
import PersonalExperience from './PersonalExperience';
import ProfessionalExperience from './ProfessionalExperience';


function ExperiencePage(){

    const [toggle, setToggle] = useState(0);



    return (
        <div className='ExperiencePage-container'>
            <div className='button-div'>
                <ButtonGroup className='button-group-experience'>
                    <button style={{
                        backgroundColor: toggle == 0 ? 'lightgreen' : '',
                        color: toggle == 0 ? '#050e2f' : ''
                    }}className="home-button" onClick={() => setToggle(0)}>Home</button>
                    <button style={{
                        backgroundColor: toggle == 1 ? 'lightgreen' : '',
                        color: toggle == 1 ? '#050e2f' : '',
                    }}className="professional-button" onClick={() => setToggle(1)}>Professional</button>
                    <button style={{
                        backgroundColor: toggle == 2 ? 'lightgreen' : '',
                        color: toggle == 2 ? '#050e2f' : ''
                    }}className="personal-button" onClick={() => setToggle(2)}>Personal</button>
                </ButtonGroup>
            </div>
            <div className='experience-content'>
                {
                    toggle == 0 ? <HomeExperience /> :
                    toggle == 1 ? <ProfessionalExperience /> :
                    <PersonalExperience />
                }

            </div>
        </div>
    )
}


export default ExperiencePage;