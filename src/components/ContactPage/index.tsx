import { useRef, useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Linkedin, Github, Envelope, GeoAlt } from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

type resultButton = "Success" | "Danger";

function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        user_email: '',
        subject: '',
        body: ''
    });
    const [formValid, setFormValid] = useState({
        user_email: false,
        subject: false,
        body: false
    });

    const notify = (s:resultButton) => {

        if (s === "Success"){
            toast("Email sent successfully!", {
                theme: 'colored',
                style: {backgroundColor: 'lightgreen', color: 'black'},
                position: 'top-left',
                autoClose: 3000
            });
        }
        else {
            toast("Email failed! Please ensure you have correctly entered an email, subject, and body", {
                theme: 'colored',
                style: {backgroundColor: '#ff6868', color: 'black'},
                position: 'top-left',
                autoClose: 5000
            });
        }
    }

    const checkValid = (s: string) => {
        if (s === 'user_email') {
            if (validator.isEmail(formValue.user_email)) {
                setFormValid({ ...formValid, user_email: true });
            } else {
                setFormValid({ ...formValid, user_email: false });
            }
        } else if (s === 'body') {
            if (validator.isEmpty(formValue.body)) {
                setFormValid({ ...formValid, body: false });
            } else {
                setFormValid({ ...formValid, body: true });
            }
        } else if (s === 'subject') {
            if (validator.isEmpty(formValue.subject)) {
                setFormValid({ ...formValid, subject: false });
            } else {
                setFormValid({ ...formValid, subject: true });
            }
        }
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        checkValid(e.target.name);
    };

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setLoading(true);
        emailjs.sendForm("service_lha85ip","template_qqlvfre", formRef.current as HTMLFormElement, 'oGwhiciNhFAOwztGo')
        .then((result) => {
            console.log(result.text);
            notify("Success");
            formRef.current?.reset();

            setFormValue({
                user_email: '',
                subject: '',
                body: ''
            });

            setFormValid({
                body: false,
                user_email: false,
                subject: false
            });

            setLoading(false);

        }, (error) => {
            console.log(error.text);
            notify("Danger");
            setLoading(false);
        });

    };

    return (
        <div className="contact-page">
            <Container fluid className="h-100">
                <motion.div 
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Get In Touch</h1>
                    <div className="highlight-bar"></div>
                    <p className="header-description">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="contact-container">
                    <Row className="contact-row g-0">
                        <Col md={5} className="contact-info-col">
                            <motion.div
                                className="contact-info"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2>Let's Connect</h2>
                                <p className="contact-description">
                                    I'm currently open to new opportunities. Whether you have a question
                                    or just want to say hi, I'll try my best to get back to you!
                                </p>
                                
                                <div className="contact-links">
                                    <a href="mailto:alexkaiser@me.com" className="contact-link">
                                        <div className="icon-wrapper">
                                            <Envelope size={20} />
                                        </div>
                                        <span>alexkaiser@me.com</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/alex-kaiser34/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <div className="icon-wrapper">
                                            <Linkedin size={20} />
                                        </div>
                                        <span>linkedin.com/in/alex-kaiser34</span>
                                    </a>
                                    <a href="https://github.com/alexkaiser34" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <div className="icon-wrapper">
                                            <Github size={20} />
                                        </div>
                                        <span>github.com/alexkaiser34</span>
                                    </a>
                                    <div className="contact-link">
                                        <div className="icon-wrapper">
                                            <GeoAlt size={20} />
                                        </div>
                                        <span>Raleigh, North Carolina</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>

                        <Col md={7} className="contact-form-col">
                            <motion.div
                                className="contact-form"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2>Send a Message</h2>
                                <Form ref={formRef} onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="user_email"
                                                    required
                                                    onChange={handleInputChange}
                                                    isInvalid={!formValid.user_email}
                                                    isValid={formValid.user_email}
                                                    placeholder="Your email"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control
                                            type="text"
                                            required
                                            onChange={handleInputChange}
                                            name="subject"
                                            isInvalid={!formValid.subject}
                                            isValid={formValid.subject}
                                            placeholder="Message subject"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            name="body"
                                            required
                                            onChange={handleInputChange}
                                            isValid={formValid.body}
                                            isInvalid={!formValid.body}
                                            placeholder="Your message"
                                        />
                                    </Form.Group>

                                    <Button 
                                        type="submit"
                                        className="submit-button"
                                        disabled={!formValid.user_email || !formValid.subject || !formValid.body || loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Form>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <ToastContainer position="top-right" />
        </div>
    );
}

export default ContactPage;