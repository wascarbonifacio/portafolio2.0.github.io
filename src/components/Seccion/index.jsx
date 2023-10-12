import { useState } from "react";
import "./Seccion.css"
import { FaAngellist, FaChild, FaHandsHelping, FaPeopleCarry, FaSyncAlt,FaLaptop, FaGamepad, FaFilm, FaMugHot, FaNewspaper } from "react-icons/fa";

import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5, IoLogoPython } from "react-icons/Io";
import { SiCss3 } from "react-icons/Si";
import { TbBrandJavascript } from "react-icons/Tb";
import { BsGithub } from "react-icons/Bs";
import { BsGit } from "react-icons/Bs";
import { useTheme } from "../../../ThemeContext"
import { BtnDownload } from "../BtnDownload";
import encriptador from '../../../dist/encriptador.png'
import destok from '../../../dist/destok.png'
import mifoto from '../../../dist/mifoto.jpeg'

export const Seccion = () =>{

    const { darkMode } = useTheme();

    const [ver, SetVer] = useState(false);

    const handdleChange = () =>{
        SetVer(!ver);
    }

    const [ver2, SetVer2] = useState(false);

    const handdleChange2 = () =>{
        SetVer2(!ver2);
    }
    

    return(
        <>
        <div className={`seccion ${darkMode ? 'seccion' : 'seccion-clara'}`}>

            <div className={`img__container ${darkMode ? 'img__container' : 'img__container-clara'}`}>
                <img className={`foto ${darkMode ? 'foto' : 'foto-clara'}`} src={mifoto} alt="Mi foto" />
                <h3>(Junior) Front-End</h3>
            </div>

            <div className={`buttons2 ${darkMode ? 'buttons2' : 'buttons2-clara'}`}>
                <a className="link" href="#descripsion">Sobre mi</a>
                <a className="link" href="#Soft">Soft skills</a>
                <a className="link" href="#Hard">Hard skills</a>
                <a className="link" href="#proyectos">Proyectos</a>
                <a className="link" href="#contacto">Contacto</a>
            </div>

            <div className={`sobreMi__Container ${darkMode ? 'sobreMi__Container' : 'sobreMi__Container-clara'}`}>
                <h3>Sobre mi</h3>

                <div className={`descripsion-container ${darkMode ? 'descripsion-container' : 'descripsion-container-clara'}`}>
                    <p className="descripsion" id="descripsion">
                        Soy de República Dominicana, ciudad Santo Domingo de Guzmán, DN. Tengo 23 años de edad, terminé la preparatoria a la edad de 19 años, en el año 2022 ingresé a la universidad O&M (Organización & Métodos) carrera Ingenieria en Sistemas. Desde pequeño me apasionaba la tecnología y a mediado del 2022 me enteré de la carrera de Programación y de su importacia. Para resumir un poco el proceso, desde ese entonces empecé a estudiarla por la web de manera autodidacta, hasta econtrar la formación patentada (Oracle ONE Alura Latam!). Me caracterizo como una persona motivadora, con deseos de superación, visionaria y apasionada de la tecnología.
                    </p>
                </div>

            </div>

            <div className={`softSkills__container ${darkMode ? 'softSkills__container' : 'softSkills__container-clara'}`} id="Soft">
                <h3 className="SoftSkills"> <hr/> Soft Skills <hr/> </h3>
                <div className="icons-container">

                    <div className="card">
                        <p className="descripsion-sS"> <FaPeopleCarry size={60} className="icon"/> Ayudar a las personas</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <FaSyncAlt size={60} className="icon"/>Dispuesto a aprender de todo un poco</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <FaAngellist size={60} className="icon"/>De buen corazon</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <FaHandsHelping size={60} className="icon"/>Solidario</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <FaChild size={60} className="icon"/>Super alegre</p>
                    </div>
                    
                </div>
            </div>

            <div className={`softSkills__container ${darkMode ? 'softSkills__container' : 'softSkills__container-clara'}`} id="Hard">
                <h3 className="SoftSkills"> <hr/> Hard Skills <hr/> </h3>
                <div className="icons-container">

                    <div className="card">
                        <p className="descripsion-sS"> <IoLogoHtml5 size={60} className="icon"/>HTML 5</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <SiCss3 size={60} className="icon"/>CSS 3</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <TbBrandJavascript size={60} className="icon"/>Java Script</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <FaReact size={60} className="icon"/>React</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <BsGithub size={60} className="icon"/>Git Hub</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <BsGit size={60} className="icon"/>Git</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <IoLogoPython size={60} className="icon"/>Python(Basico)</p>
                    </div>
                    <div className="card">
                        <p className="descripsion-sS"> <FaLaptop size={60} className="icon"/>armar pc</p>
                    </div>
                    
                </div>
            </div>

            <div className={`softSkills__container ${darkMode ? 'softSkills__container' : 'softSkills__container-clara'}`} id="proyectos">
                <h3 className="SoftSkills"> <hr/> Proyectos <hr/> </h3>
                <div className="icons-container">

                    <div className="seccion__proyectos">

                        <div className="img-card">
                            <h3>Encriptador de texto</h3>
                            <img src={encriptador} alt="encriptador" className="img-proyectos"/>
                            <div className={`link-p ${darkMode ? 'link-p' : 'link-p-clara'}`}>
                                <a className={`proyectos_link ${darkMode ? 'proyectos_link' : 'proyectos_link-clara'}`} href="https://github.com/wascarbonifacio/encriptador" target="blank">Ver proyecto</a>
                                <button onClick={handdleChange}>Ver tecnologias</button>
                            </div>
                            {ver ? <span>
                                <div className="card">
                                    <p className="descripsion-sS"> <IoLogoHtml5 size={60} className="icon"/>HTML 5</p>
                                </div>
                                <div className="card">
                                    <p className="descripsion-sS"> <SiCss3 size={60} className="icon"/>CSS 3</p>
                                </div>
                                <div className="card">
                                    <p className="descripsion-sS"> <TbBrandJavascript size={60} className="icon"/>Java Script</p>
                                </div>
                            </span> : null}
                        </div>

                        <div className="img-card">
                            <h3>E-commerce (Wf Autozone)</h3>
                            <img src={destok} alt="encriptador" className="img-proyectos"/>
                            <div className={`link-p ${darkMode ? 'link-p' : 'link-p-clara'}`}>
                                <a className={`proyectos_link ${darkMode ? 'proyectos_link' : 'proyectos_link-clara'}`} href="https://github.com/wascarbonifacio/WfautoZone-v0.5" target="blank">Ver proyecto</a>
                                <button onClick={handdleChange2}>Ver tecnologias</button>
                            </div>
                                {ver2 ? <span>
                                <div className="card">
                                    <p className="descripsion-sS"> <IoLogoHtml5 size={60} className="icon"/>HTML 5</p>
                                </div>
                                <div className="card">
                                    <p className="descripsion-sS"> <SiCss3 size={60} className="icon"/>CSS 3</p>
                                </div>
                                <div className="card">
                                    <p className="descripsion-sS"> <TbBrandJavascript size={60} className="icon"/>Java Script</p>
                                </div>
                                <div className="card">
                                    <p className="descripsion-sS"> <FaReact size={60} className="icon"/>React</p>
                                </div>
                            </span> : null}
                            
                        </div>

                        <BtnDownload/>
                    </div>
                    
                </div>
            </div>
            <div className={`softSkills__container ${darkMode ? 'softSkills__container' : 'softSkills__container-clara'}`}>
                <h3 className="SoftSkills hobbie-tt"> <hr/> Hobbies <hr/> </h3>
                <div className="hobbies">
                    
                        <div className="card">
                            <p className="descripsion-sS"> <FaGamepad size={60} className="icon"/>Jugar video juegos</p>
                        </div>
                        <div className="card">
                            <p className="descripsion-sS"> <FaFilm size={60} className="icon"/>Ver anime</p>
                        </div>
                        <div className="card">
                            <p className="descripsion-sS"> <FaMugHot size={60} className="icon"/>Beber café</p>
                        </div>
                        <div className="card">
                            <p className="descripsion-sS"> <FaNewspaper size={60} className="icon"/>Leer manhwa</p>
                        </div>

                </div>
            </div>

        </div>
        </>
    )
}

