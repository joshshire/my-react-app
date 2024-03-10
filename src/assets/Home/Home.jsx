import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from './Home.module.css'
import navbar from '../Sidebar/Sidebar'

function Home() {
    const [color, setColor] = useState(() => String(localStorage.getItem('color') || '#333'));

    useEffect(() => {
        // Save num to localStorage whenever it changes
        localStorage.setItem('color', color);
    }, [color]);
    const clicked = () => {
        setColor(document.getElementById('text').value);
    }

    useEffect(() => {
        if (color) {
            document.body.style.backgroundColor = color;
            // document.title.style.backgroundColor = color;
        }
    }, [color]);

        

    return(
        <div >
            <Sidebar/>
            <div className={styles.container}>
                <h1>
                    Home Page
                </h1>
                <h3>Set Background Color</h3>
                <input placeholder="Color" className={styles.input} id='text'></input>
                <input type="submit" onClick={clicked}></input>
            </div>
        </div>
    );
}

export default Home;
