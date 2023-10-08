

import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css';
import validator from 'validator';
import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';
import FadeAnimate from '../FadeAnimate';

function ContactPage(){

    const myForm = useRef<HTMLFormElement>();

    const [formValue, setFormValue] = useState({
        user_email: '',
        subject: '',
        body: ''
    });

    const [formValid, setFormValid] = useState({
        user_email: false,
        subject: true,
        body: false
    });


    useEffect(() => {
        checkValid('email');
    }, [formValue.user_email]);

    useEffect(() => {
        checkValid('body');
    }, [formValue.body]);



    const onChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const checkValid = (s: string) => {
        if (s === 'email'){
            if (validator.isEmail(formValue.user_email)){
                setFormValid({...formValid, user_email: true});
            }
            else {
                setFormValid({...formValid, user_email: false});
            }
        }
        else {
            if (validator.isEmpty(formValue.body)){
                setFormValid({...formValid, body: false});
            }
            else {
                setFormValid({...formValid, body: true});
            }
        }

    }

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        emailjs.sendForm("service_w25fpau","template_qqlvfre",myForm.current as HTMLFormElement, 'oGwhiciNhFAOwztGo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        myForm.current?.reset();
    };


    return (
        <div className="ContactPage-container">
            <div className='contact-header'>
                <motion.h1
                animate={{x: [-2000, 0]}}
                transition={{ ease: "easeIn", duration: 0.5 }}
                >
                    Get in Touch
                </motion.h1>

                <motion.h2
                animate={{x: [2000, 0]}}
                transition={{ delay: 0.4, ease: "easeIn", duration: 0.5 }}
                >
                    Want to get in touch? Click on one of the sidebar icons or send me an email!
                </motion.h2>
            </div>
            {FadeAnimate({className: 'contact-form', delay: 1, children:
                <>
                <Form ref={myForm as any} className="email-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            as="input"
                            required
                            onChange={onChange}
                            name="user_email"
                            type="email"
                            isValid={formValid.user_email}
                            placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            as="input"
                            name="subject"
                            isValid={formValid.subject}
                            placeholder="Exciting Job Opportunity from <company name> (optional)"
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            required
                            onChange={onChange}
                            isValid={formValid.body}
                            rows={8}
                            name="body"
                            placeholder="We are prepared to offer you 1 billion dollars..."
                             />
                    </Form.Group>
                    <Button type="submit" disabled={!(formValid.body && formValid.subject && formValid.user_email)} className="submit-button">
                        Send Email
                    </Button>
                </Form>
                </>
            })}
        </div>
    )
}

export default ContactPage;