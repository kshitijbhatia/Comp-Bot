import React from 'react'
import Logo from '../images/Logo.png'
import '../App.css';



function Header(props) {

  function handleClick(){
    props.ClickNotice("button0");
  }

  return (
    <div className='header'>
        
        <img id = "Logoimg" src={Logo} alt="" />
        <h4  onClick = {handleClick}>HOME</h4>
        
    </div>
  )
}

export default Header
