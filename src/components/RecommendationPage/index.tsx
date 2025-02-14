import fpgaLetter from './fpga-letter-of-rec.pdf';
import schoolLetter from './school-letter-of-rec.pdf';
import secTechLetter from './secure-tech-letter-of-rec.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Quote } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import './styles.css';

function RecommendationPage() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [scale, setScale] = useState(1.0);

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        }
        window.addEventListener('resize', updateDimension);
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize]);

    useEffect(() => {
        if (screenSize.width > 1300) {
            setScale(1.0);
        } else if (screenSize.width <= 1300 && screenSize.width > 1150) {
            setScale(0.8);
        } else {
            setScale(0.6);
        }
    }, [screenSize.width]);

    useEffect(() => {
        document.title = "Alex Kaiser - Recommendations";
    }, []);

    const recommendations = [
        {
            name: "Professor Brian Krug",
            title: "GVSU Professor",
            description: "Letter of recommendation from my professor at Grand Valley State University, highlighting my academic achievements and research contributions.",
            file: schoolLetter
        },
        {
            name: "Jake Vande Brake (PMP, ACP)",
            title: "DornerWorks Engineering Project Manager",
            description: "Recommendation focusing on my work with FPGA development and embedded systems during my time at DornerWorks.",
            file: fpgaLetter
        },
        {
            name: "David Van Duinen",
            title: "DornerWorks Engineering Project Manager",
            description: "Professional recommendation highlighting my contributions to secure technology projects and software development.",
            file: secTechLetter
        }
    ];

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <div className="recommendation-page">
            <Container fluid>
                <motion.div 
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Letters of Recommendation</h1>
                    <div className="highlight-bar"></div>
                    <p className="header-description">
                        Professional endorsements from academic and industry leaders who have witnessed my work firsthand.
                    </p>
                </motion.div>

                <div className="recommendations-container">
                    {recommendations.map((rec, index) => (
                        <motion.div
                            key={index}
                            className="recommendation-section"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Row className="recommendation-content">
                                <Col lg={4} className="recommendation-info">
                                    <div className="quote-icon">
                                        <Quote size={40} />
                                    </div>
                                    <h2>{rec.name}</h2>
                                    <h3>{rec.title}</h3>
                                    <p>{rec.description}</p>
                                </Col>
                                <Col lg={8} className="pdf-container">
                                    <div className="pdf-wrapper">
                                        <Document file={rec.file}>
                                            <Page 
                                                scale={scale} 
                                                pageNumber={1} 
                                                renderTextLayer={false} 
                                                renderAnnotationLayer={false}
                                            />
                                        </Document>
                                    </div>
                                </Col>
                            </Row>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default RecommendationPage;