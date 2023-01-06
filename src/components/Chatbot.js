import React from 'react'
import {useState} from 'react'
import AskUrja from '../images/Ask Urja.png';
import sendarrow from '../images/Send-Arrow.png';
import Fade from 'react-reveal/Fade';
import '../App.css';
import book1 from '../images/Book.png';
import styled from 'styled-components';
import background from '../images/text-background-img.jpg';
import ONGC from '../images/ONGC.png';
import AskGyaan from '../images/AskGyaan.png'
import UncheckedBox from '../images/Unchecked-box.png';
import CheckedBox from '../images/Checked-box.png';
import ThreeDotMenu from '../images/three-dot-menu.png';
import Message from './Message';

function Chatbot(props){

    const x = props.changeHeader;
    
    const arr = [{name:"Ask Urja",imgSrc:AskUrja,backgroundColor:"#8C040D"},
                 {name:"Ask Gyaan",imgSrc:AskGyaan,backgroundColor:"#3D6BDC"},
                 {name:"Ask Nyay",imgSrc:AskGyaan,backgroundColor:"#673C83"},
                 {name:"ChatBot",imgSrc:AskGyaan,backgroundColor:"#5CBC6E"}
                ]

    //For Accuracy Dropdown
    const [opendropdown,setopendropdown] = useState(false);
    const[check1,setcheck1] = useState(false);
    const[check2,setcheck2] = useState(false);
    

    //For heading date
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fulldate = day + "/" + month + "/" + year;

    //For messages in chatbot
    const [messageArray,setMessageArray] = useState([]);
    const [message,setMessage] = useState({msg:"",time:""})

    function handleMessage(e){
        var {name,value} = e.target;
        setMessage(prevmessage =>{
            return{
                ...prevmessage,
                [name]:value
            }
        })
    }

    function sendMessage(){
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        message.time = strTime;

        setMessageArray(prevmessage =>{
            return[...prevmessage,message]
        })

        setMessage({msg:"",time:""})
    } 

    //For Messages from computer
    let computerMessage = ["Hi! Welcome to ONGC Bandhan. Ask your queries here.",
                           "Hello, my name is Gyaan. Ask me a question from the given passage and I will get the answer for you.",
                           "Hello, my name is Gyaan. Ask me a question from the given passage and I will get the answer for you.",
                           "Hi! Welcome to Chatbot Demo. You can Upload a paragraph here and ask questions around it."]


    return (
    <div>
        <div className='chatbot' onClick = {() =>setopendropdown(false)} onKeyPress = {(e) =>{if(e.key === 'Enter')sendMessage()}}>
                {/* ----------- */}
                <div  className="ask-col flex-container"  style = {{backgroundColor: arr[x].backgroundColor}}>
                        <img src={arr[x].imgSrc} alt="" />
                        <p>{arr[x].name}</p>
                        <img src={background} id = "background-img" alt="" />
                </div>
                {/* ----------- */}
                <div className='chat-area'>
                    <div className='full-date'>
                        {fulldate}
                    </div>

                    <div className='answer'>
                        <p>{(x === "0")?computerMessage[0]:(x === "1")?computerMessage[1]:(x === "2")?computerMessage[2]:computerMessage[3]}</p>
                    </div>

                    {messageArray.map((messageItem,index) =>{
                        return(
                            <Message message = {messageItem.msg} key = {index} strTime = {messageItem.time}/>
                        )
                    })}
                </div>
                {/* ----------- */}
                <div className='typecolumn container'>
                    <div className ='row'>
                    <input type="text" placeholder='Type your message here...' autoComplete = 'off' name='msg' value = {message.msg} onChange={handleMessage}/>
                    <img src={sendarrow} alt="" onClick={sendMessage}/>
                    </div>
                </div>

        </div>

            <img src={ThreeDotMenu}  id = "three-dot-menu"  onClick={() =>setopendropdown(true)}  alt=""/>
                    {opendropdown &&
                    <div className='accuracy-dropdown' onClick = {() =>{setopendropdown(true)}}>
                        <span className='Show-Accuracy' onClick={() =>{setcheck1(!check1)}}>
                            <img src={(check1 === true)?CheckedBox:UncheckedBox} alt="" />
                            <h4>Show Accuracy</h4>
                        </span>
                        <span className='Notification-Sound' onClick={()=>{setcheck2(!check2)}}>
                            <img src={(check2 === true)?CheckedBox:UncheckedBox} id = "Unchecked-Box" alt="" />    
                            <h4>Notification Sound</h4>
                        </span>
                    </div>
                    }
    </div>
  )
}

export default Chatbot
