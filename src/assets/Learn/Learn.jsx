import Sidebar from "../Sidebar/Sidebar"
import { useState } from "react";
function Learn(){
    const [name, setname] = useState('');
    function HandleNameChange(event){
        setname(event.target.value)
        if(event.target.value == 'Josh'){
            let para = document.createElement('P')
            let node = document.createTextNode('Hello ')
            para.appendChild(node)
        } else{
            console.log('Rich')
        }
    }
    return(

        <div>
            <Sidebar/>
            <h1>Name</h1>
            <h1>Name: {name}</h1>
            <input id='name' onChange={HandleNameChange}></input>
        </div>
    );
}
export default Learn