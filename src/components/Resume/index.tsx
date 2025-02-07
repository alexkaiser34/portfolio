import { useEffect, useMemo, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, X } from "react-bootstrap-icons";
import resume from './resume.pdf';
import './styles.css';

function Resume() {
    const [showModal, setShowModal] = useState(false);
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [scale, setScale] = useState(1.2);

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
        if (screenSize.width < 1000 && screenSize.width > 560) {
            setScale(0.8);
        }
        else if (screenSize.width <= 560 && screenSize.width > 475) {
            setScale(0.7);
        }
        else if (screenSize.width <= 475 && screenSize.width > 425) {
            setScale(0.58);
        }
        else if (screenSize.width <= 425) {
            setScale(0.48);
        }
        else {
            setScale(1.2);
        }
    }, [screenSize.width]);

    const ResumeFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return (
            <Document file={resume}>
                <Page scale={scale} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const MemoFile = useMemo(() => ResumeFile(), [scale]);

    return (
        <>
            <Button 
                className="nav-resume-button" 
                onClick={() => setShowModal(true)}
            >
                Resume
            </Button>

            <Modal 
                show={showModal} 
                onHide={() => setShowModal(false)}
                size="lg"
                centered
                className="resume-modal"
            >
                <Modal.Header className="resume-modal-header">
                    <Modal.Title>Resume</Modal.Title>
                    <div className="modal-actions">
                        <a href="files/Alex_Kaiser_Resume.pdf" target="_blank" download>
                            <Button className="download-button">
                                <Download size={20} />
                                <span>Download</span>
                            </Button>
                        </a>
                        <Button className="close-button" onClick={() => setShowModal(false)}>
                            <X size={24} />
                        </Button>
                    </div>
                </Modal.Header>

                <Modal.Body className="resume-modal-body">
                    <div className="pdf-viewer">
                        {MemoFile}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Resume;