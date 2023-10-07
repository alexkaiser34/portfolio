
import { useState } from 'react';
import { Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import './style.css';
import PersonalExperience from './PersonalExperience';
import ProfessionalExperience from './ProfessionalExperience';


function ExperiencePage(){

    const [toggle, setToggle] = useState(0);



    return (
        <div className='ExperiencePage-container'>
            <div className='fixed-experience'>
                <div className='button-div-wrapper'>
                    <div className='button-div'>
                        <ButtonGroup className='button-group-experience'>
                            <button style={{
                                backgroundColor: toggle == 0 ? 'lightgreen' : '',
                                color: toggle == 0 ? '#050e2f' : '',
                            }}className="professional-button" onClick={() => {
                                window.scrollTo(0,0);
                                setToggle(0);
                            }}>Professional</button>
                            <button style={{
                                backgroundColor: toggle == 1 ? 'lightgreen' : '',
                                color: toggle == 1 ? '#050e2f' : ''
                            }}className="personal-button" onClick={() => {
                                window.scrollTo(0,0);
                                setToggle(1);
                            }}>Personal</button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className='experience-content'>
                {
                    toggle == 0 ? <ProfessionalExperience /> :
                    <PersonalExperience />
                }

            </div>
        </div>
    )
}


export default ExperiencePage;