import { useEffect, useRef, useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Linkedin, Github, Envelope, GeoAlt } from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formValid, setFormValid] = useState({
        name: false,
        email: false,
        message: false
    });

    useEffect(() => {
        document.title = "Alex Kaiser - Contact";
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'email':
                setFormValid(prev => ({ ...prev, email: validator.isEmail(value) }));
                break;
            case 'name':
            case 'message':
                setFormValid(prev => ({ ...prev, [name]: value.trim().length > 0 }));
                break;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                formRef.current!,
                'YOUR_PUBLIC_KEY'
            );
            toast.success('Message sent successfully!');
            formRef.current?.reset();
            setFormData({ name: '', email: '', subject: '', message: '' });
            setFormValid({ name: false, email: false, message: false });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error(error);
        }

        setLoading(false);
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
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    required
                                                    onChange={handleInputChange}
                                                    isValid={formValid.name}
                                                    placeholder="Your name"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    required
                                                    onChange={handleInputChange}
                                                    isValid={formValid.email}
                                                    placeholder="Your email"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            onChange={handleInputChange}
                                            placeholder="Message subject"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            name="message"
                                            required
                                            onChange={handleInputChange}
                                            isValid={formValid.message}
                                            placeholder="Your message"
                                        />
                                    </Form.Group>

                                    <Button 
                                        type="submit"
                                        className="submit-button"
                                        disabled={!formValid.email || !formValid.name || !formValid.message || loading}
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