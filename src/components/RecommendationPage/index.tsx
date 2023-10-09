
import './styles.css';
import fpgaLetter from './fpga-letter-of-rec.pdf';
import schoolLetter from './school-letter-of-rec.pdf';
import secTechLetter from './secure-tech-letter-of-rec.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
import FadeAnimate from '../FadeAnimate';
import { useEffect, useMemo, useState } from 'react';


function RecommendationPage(){

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [show, setShow] = useState(false);
    const [scale, setScale] = useState(1.0);

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

        if (screenSize.width > 1300){
            setScale(1.0);
        }
        else if (screenSize.width <= 1300 && screenSize.width > 1150){
            setScale(0.8);
        }
        else {
            setScale(0.6);
        }

    },[screenSize.width])


    const SchoolFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={schoolLetter}>
                <Page scale={scale} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const FpgaFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={fpgaLetter}>
                <Page scale={scale} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }


    const SecTechFile = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return(
            <Document file={secTechLetter}>
                <Page scale={scale} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        );
    }

    const MemoFpga = useMemo(() => FpgaFile(), [scale]);
    const MemoSchool = useMemo(() => SchoolFile(), [scale]);
    const MemoSecTech = useMemo(() => SecTechFile(), [scale]);


    return (
        <div className="RecommendationPage-container">
            <div className='rec-header-flex'>
                <h1>Recommendations from Colleagues</h1>
            </div>
            <div className="letter-wrapper">

                <div className='letter-grid-wrapper'>
                {FadeAnimate({className: 'letter-grid', children:
                    <>
                        <h1>Professor Brian Krug</h1>
                        <h2>GVSU Professor</h2>
                        {MemoSchool}
                    </>
                })}
                </div>

                <div className='letter-grid-wrapper'>


                {FadeAnimate({className: 'letter-grid', children:
                    <>
                        <h1>Jake Vande Brake (PMP,ACP)</h1>
                        <h2>DornerWorks Engineering Project Manager</h2>
                        {MemoFpga}
                    </>

                })}

                </div>

                <div className='letter-grid-wrapper'>
                {FadeAnimate({className: 'letter-grid', children:
                    <>
                        <h1>David Van Duinen</h1>
                        <h2>DornerWorks Engineering Project Manager</h2>
                        {MemoSecTech}
                    </>

                })}
                </div>
            </div>
        </div>
    );
}

export default RecommendationPage;