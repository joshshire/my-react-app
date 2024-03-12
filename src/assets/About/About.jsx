import { useEffect, useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";    
import styles from './About.module.css'
import banner from './Banner.jpg'
import backgroundImage from './PlaceHolderDog.jpg';
import projectImage from './Project.jpg';
import Footer from '../Footer/Footer';

function About(){
    let [color, setColor] = useState(() => localStorage.getItem('color') || '#333')
    useEffect(() => {
        const colorItem = localStorage.getItem('color');
        if (colorItem) {
            setColor(colorItem);
            document.body.style.backgroundColor = color;
        }
    }, []);

    return(
        <div id={styles.container}>
            <Sidebar/>
            <div id={styles.grid}>
                <div id={styles.Who}>
                    <div className={styles.textbox}>
                        <div className={styles.textcont}>
                            <h2 className={styles.text}>Hello, I'm Josh.</h2>
                            <h4 className={styles.text}>I'm learning to become a</h4>
                            <h2 className={styles.text}>Full Stack</h2>
                            <h2 className={styles.text}>Developer</h2>
                            <div>
                                <a href='#'><button id={styles.button}>Hello</button></a>
                            </div>
                        </div>          
                    </div>
                </div>
                        <div className={styles.leftColumn}>
                            <h1 className={styles.projectTitle}>My projects</h1>
                            <img className={styles.img} src={backgroundImage}></img>
                        </div>
                        <Footer/>
            </div>
        </div>
                        /*<div className={styles.project1}>
                            <a href='/Home'><h3 className={styles.Project1Title}>Project 1 - Website</h3></a>
                            <pre className={styles.Project1Desc}>Lorem ipsum, dolor sit amet<br></br>
                            consectetur adipisicing elit. Possimus.</pre>
                            <img className={styles.Project1Image} src={projectImage}></img>
                        </div> */
    );
}

export default About
