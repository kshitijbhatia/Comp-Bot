import React from 'react';
import '../App.css';
import { useState } from 'react';
import ONGC from '../images/ONGC.png';
import arrow from '../images/Arrow-down.png';
import AskUrja from '../images/Ask Urja.png';
import sendarrow from '../images/Send-Arrow.png';
import book2 from '../images/Mask Group 2.png';
import book1 from '../images/Book.png';
import save from '../images/save.png';
import deletebutton from'../images/delete-button.png';
import Fade from 'react-reveal/Fade';
import ChatBot from '../components/Chatbot.js';
import Dropdown from '../components/Dropdown.js';
import Alert from './Alert.js';

function Comprehension(props) {

    //For Dropdown
    const [selected,setSelected] = useState({imgSrc: props.icon,name:props.msg,text:props.text});

    //To change Color of the Chatbot
    const initialState = (props.msg === "ONGC Corporate Info")?"0":(props.msg === "Comprehension Exercise")?"1":(props.msg === "Legal Information")?"2":'';
    const [changeColor,setChangeColor] = useState(initialState);

    function Color(x){
        setChangeColor(x);
    }

    // To open add new input 
    const[addNew,setAddNew] = useState(false);

    // For Comprehension Change
    function handleChangeText(e){
      var value = e.target.value;
      selected.text = value;
    }

    //To edit the comprehension(To open contentEditable in the textarea div)
    const [edit,setEdit] = useState(false);
    
    //Alert Box

    // To open the alert box when update is clicked
    const [showAlert,setShowAlert] = useState([false,'']);
    // For the functionality of alert box
    const [confirm,setConfirm] = useState(false);

    function OpenAlert(e){
      if(e === "Update"){setShowAlert([true,e]);}
      else if(e === "Delete"){setShowAlert([true,e])}
    }

  return (
      <div className = 'flex-container'>    
          <div className='comp'>
              <Dropdown 
              selected = {selected} 
              setSelected = {setSelected} 
              addNew = {addNew}
              setAddNew = {setAddNew}
              edit = {edit}
              setEdit = {setEdit}
              Color = {Color} 
              OpenAlert = {OpenAlert}
              showAlert = {showAlert}
              confirm = {confirm}
              setConfirm = {setConfirm}
              />

              <div className='textarea' style={{overflow:'scroll'}}>
                {(edit === true)?
                  <textarea name="" id="" cols="68" rows="18" placeholder= 'Add Text Here...' onChange={handleChangeText}>{selected.text}</textarea>:
                  (addNew === false)&&selected.text
                }
              </div>
          </div> 
          
          {(showAlert[0] === true) &&  
          <Alert 
          showAlert = {showAlert}
          setShowAlert = {setShowAlert}
          confirm = {confirm}
          setConfirm = {setConfirm}
          />}

          <ChatBot changeHeader = {changeColor} selected = {selected}/>

      </div>
  )
}

export default Comprehension