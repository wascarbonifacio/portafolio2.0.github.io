import "./BtnDownload.css"
import { useTheme } from "../../../ThemeContext"
import WascarFloresCVVspanish from '../../../dist/WascarFloresCVVspanish.pdf'

export const BtnDownload = () => {

    const { darkMode } = useTheme();

    const handleDownload = () => {
        
        const pdfUrl = WascarFloresCVVspanish;
        
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = 'Wascar Flores CVV spanish.pdf';
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