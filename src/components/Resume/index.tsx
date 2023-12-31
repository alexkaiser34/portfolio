import { useEffect, useMemo, useRef, useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader, CloseButton } from "react-bootstrap";
import { Document, Page, pdfjs } from 'react-pdf';
import { CartX, Download } from "react-bootstrap-icons";
import resume from './resume.pdf';

import './styles.css';
import { Link } from "react-router-dom";

function Resume(){

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [show, setShow] = useState(false);
    const [scale, setScale] = useState(1.2);

  	function getCurrentDimension(){
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
        if (screenSize.width < 1000 && screenSize.width > 560){
            setScale(0.8);
        }
        else if (screenSize.width <= 560 && screenSize.width > 475){
            setScale(0.7);
        }
        else if (screenSize.width <= 475 && screenSize.width > 425){
            setScale(0.58);
        }
        else if (screenSize.width <= 425){
            setScale(0.48);
        }
        else{
            setScale(1.2);
        }
    },[screenSize.width]);

    const ResumeFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={resume}>
                <Page scale={scale} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const MemoFile = useMemo(() => ResumeFile(), [scale]);

    const myButton = () => {
        return (
            <Button type="button" className="btn-close" aria-label="Close">
                <CartX />
            </Button>
        );
    }

    return (
        <div className="button-container" style={{paddingRight: '20px'}}>
        <Button onClick={() => setShow(true)} className="button-item">
            Resume
        </Button>
        <Modal
            size="lg"
            show={show}
            className="resume-modal"
            onHide={() => setShow(false)}
            >
            <ModalHeader className="resume-modal-header" closeButton>
                <Modal.Title>
                    Resume
                </Modal.Title>
                <div className="ms-auto" id='download-button'>
                <a href="files/Alex_Kaiser_Resume.pdf" target="_blank" download>
                    <Button>
                        <Download />
                    </Button>
                </a>
                </div>
            </ModalHeader>
            <ModalBody>

                <div className="d-flex align-items-center justify-content-center">
                    {MemoFile}
                </div>
            </ModalBody>
        </Modal>
        </div>
    );
}


export default Resume;