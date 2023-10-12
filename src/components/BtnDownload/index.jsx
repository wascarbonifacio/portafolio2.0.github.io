import "./BtnDownload.css"
import { useTheme } from "../../../ThemeContext"

export const BtnDownload = () => {

    const { darkMode } = useTheme();

    const handleDownload = () => {
        
        const pdfUrl = '../../../public/Wascar Flores CVV22 spanish.pdf';
        
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = 'Wascar Flores CVV2 spanish.pdf';
        link.click();
      };

    return(
        <>
            <button className={`btnPdf ${darkMode ? 'btnPdf' : 'btnPdf-clara'}`} onClick={handleDownload}>
                Descargar CV
            </button>     
        </>
    )
}