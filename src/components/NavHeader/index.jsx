import "./NavHeader.css"
import MaterialUISwitch from "../Switch";
import { useTheme } from "../../../ThemeContext"


const NavHeader = () =>{

    const { darkMode } = useTheme();

    return (
        <nav className={`navegacion ${darkMode ? 'navegacion' : 'navegacion-clara'}`}>
            <div className={`nombre ${darkMode ? 'nombre' : 'nombre-clara' }`}>
                <h1>Wascar Bonifacio</h1>
            </div>
            <div className="buttons">
                <a className={`link ${darkMode ? 'link' : 'link-claro'}`} href="#descripsion">Sobre mi</a>
                <a className={`link ${darkMode ? 'link' : 'link-claro'}`} href="#Soft">Soft skills</a>
                <a className={`link ${darkMode ? 'link' : 'link-claro'}`} href="#Hard">Hard skills</a>
                <a className={`link ${darkMode ? 'link' : 'link-claro'}`} href="#proyectos">Proyectos</a>
                <a className={`link ${darkMode ? 'link' : 'link-claro'}`} href="#contacto">Contacto</a>
            </div>
            <div className="container__mc-mo">
                <MaterialUISwitch/>
            </div>
        </nav>
    )
}

export default NavHeader;