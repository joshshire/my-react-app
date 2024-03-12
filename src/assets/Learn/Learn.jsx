import Sidebar from "../Sidebar/Sidebar"
import { useState } from "react";
import style from './Learn.module.css'
function Learn(){
    const [name, setname] = useState('');
    return(

        <div>
            <Sidebar/>
            <div class="container">
                <div class={style.item} id={style.item1}>Item 1</div>
                <div class={style.item}>Item 2</div>
                <div class={style.item}>Item 3</div>
            </div>
            </div>
    );
}
export default Learn