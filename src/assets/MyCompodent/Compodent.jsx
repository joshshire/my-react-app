import { useState, useEffect } from "react";
import styles from './Compodent.module.css'
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home";
function Compodent(){
    // Initialize num from localStorage or set to 0 if not found
    let [num, setnum] = useState(() => Number(localStorage.getItem('num')) || 0)
    let [color, setColor] = useState(() => localStorage.getItem('color') || '')

    useEffect(() => {
        // Save num to localStorage whenever it changes
        localStorage.setItem('num', num);
    }, [num]);

    useEffect(() => {
        // Fetch color from localStorage whenever the component mounts
        const colorItem = localStorage.getItem('color');
        if (colorItem) {
            setColor(colorItem);
            document.body.style.backgroundColor = color;
        }
    }, []);

    const increment = () => {
        setnum(num + 1);
    }

    const reset = () => {
        setnum(0);
    }

    const decrement = () => {
        setnum(num > 0 ? num - 1 : 0);
    }


    return(
        <div>
            <Sidebar/>
            <div className={styles.counterContainer}>
                <h1 className={styles.count}>{num}</h1>
                <button className={styles.button} onClick={increment}>Increment</button>
                <button className={styles.button} onClick={reset}>Reset</button>
                <button className={styles.button} onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default Compodent