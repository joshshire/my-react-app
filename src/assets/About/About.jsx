import { useEffect, useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import styles from './About.module.css'
import banner from './Banner.jpg'
import backgroundImage from './PlaceHolderDog.jpg';
import projectImage from './Project.jpg';

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
            {/* <Sidebar/> */}
            <div className={styles.Who}>
                <h2>Hello, I'm Josh.</h2>
                <h4>I'm learning to become a</h4>
                <h2 className={styles.subject}>Full Stack</h2>
                <h2 className={styles.subject}>Developer</h2>
                <button className={styles.button}value='Linkden'>Download CV</button>
                <img className={styles.whoImage} src={backgroundImage}></img>
                <div className={styles.projects}>
                    <h1 className={styles.projecttitle}>My projects</h1>
                    <div className={styles.project1}>
                        <a href='/Home'><h3 className={styles.project1title}>Project 1 - Website</h3></a>
                        <pre className={styles.project1desc}>Lorem ipsum, dolor sit amet<br></br>
                        consectetur adipisicing elit. Possimus.</pre>
                        <img className={styles.Project1Image} src={projectImage}></img>
                    </div>
                </div>
                
            </div>
            <footer className={styles.footer}>
                    <p>© 2024 Josh. All rights reserved.</p>
                    </footer>
            </div>
    );
}

export default About