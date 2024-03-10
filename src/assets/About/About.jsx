import { useEffect, useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import styles from './About.module.css'
import banner from './Banner.jpg'
import backgroundImage from './PlaceHolderDog.jpg';

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
            <div className={styles.Banner}>
                <img></img>
            </div>
            
            <div className={styles.photo}>
            </div>
            <div className={styles.Who}>
                <h2>Hello, I'm Josh.</h2>
                <h4>I'm learning to become a</h4>
                <h2 className={styles.subject}>Full Stack</h2>
                <h2 className={styles.subject}>Developer</h2>
                <button className={styles.button}value='Linkden'>Download CV</button>
                <img src={backgroundImage}></img>
            </div>
            <div>
            </div>
        </div>
    );
}

export default About