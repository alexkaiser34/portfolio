
import './styles.css';
import fpgaLetter from './fpga-letter-of-rec.pdf';
import schoolLetter from './school-letter-of-reec.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import FadeAnimate from '../FadeAnimate';
import { useEffect, useMemo, useState } from 'react';


function RecommendationPage(){

    const [show, setShow] = useState(false);

    const SchoolFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={schoolLetter}>
                <Page scale={1.0} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const FpgaFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={fpgaLetter}>
                <Page scale={1.0} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const MemoFpga = useMemo(() => FpgaFile(), []);
    const MemoSchool = useMemo(() => SchoolFile(), []);


    return (
        <div className="RecommendationPage-container">
            <div className='rec-header'>
                <div className='rec-header-flex'>
                    <h1>Recommendations from Colleagues</h1>
                </div>
            </div>
            <div className="letter-wrapper">
                {FadeAnimate({className: 'school-rec', children:
                    <>
                        <h1>Professor Brian Krug</h1>
                        <h2>GVSU Professor</h2>
                        {MemoSchool}
                    </>
                })}

                {FadeAnimate({className: 'fpga-rec', children:
                    <>
                        <h1>Jake Vande Brake (PMP,ACP)</h1>
                        <h2>DornerWorks Engineering Project Manager</h2>
                        {MemoFpga}
                    </>

                })}
            </div>
        </div>
    );
}

export default RecommendationPage;