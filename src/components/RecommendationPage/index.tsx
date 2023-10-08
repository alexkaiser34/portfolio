
import './styles.css';
import fpgaLetter from './fpga-letter-of-rec.pdf';
import schoolLetter from './school-letter-of-reec.pdf';
import { Document, Page, pdfjs } from 'react-pdf';


function RecommendationPage(){

    const SchoolFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={schoolLetter}>
                <Page scale={0.8} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const FpgaFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={fpgaLetter}>
                <Page scale={0.8} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    return (
        <div className="RecommendationPage-container">
            <div className='rec-header-wrapper'>
                <div className='rec-header'>
                <h1>Recommendations from Colleagues</h1>
                </div>
            </div>
            <div className="letter-wrapper">
                <div className='school-rec'>
                    <h1>Professor Brian Krug</h1>
                    <h2>GVSU Professor</h2>
                    <SchoolFile />
                </div>
                <div className='fpga-rec'>
                    <h1>Jake Vande Brake (PMP,ACP)</h1>
                    <h2>DornerWorks Engineering Project Manager</h2>
                    <FpgaFile />
                </div>
            </div>
        </div>
    );
}

export default RecommendationPage;