import React,{ useState } from 'react'
import '../App.css'
import sendarrow from '../images/Send-Arrow.png';
import background from '../images/text-background-img.jpg';

function Selectcontext(props) {
    const [isActive,setIsActive] = useState(false);
    
    function handleChange(event){
        props.ClickNotice(event.target.id);
    }


  return (
    <div class = "flex-container">
        <div className='context'>
            <h1>CONTEXT</h1>
            <h3>Select a context from the below list and you can ask questions from the given paragraph</h3>
            <center>
            <button id = "button1" type = "button" class="btn btn-light" onClick={handleChange}>ONGC Corporate Info</button>
            <button id = "button2" type = "button" class="btn btn-light" onClick = {handleChange}>Comprehension Exercise</button>
            <button id = "button3" type = "button" class="btn btn-light" onClick = {handleChange}>Legal Information</button>
            </center>            
        </div>
        <div className='chat-window'>
            <div className='chat-window-text'>
                <h3>Chat Window</h3>
                <img src={background} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Selectcontext