import React from 'react'
import '../App.css';

function Alert(props) {

  var arr = [{title:"Save Changes",msg:"Are you sure you want to save changes?"},
             {title:"Discard Changes",msg:"Are you sure you want to discard all changes?"}]

  function handleCancel(){
    props.setShowAlert([false,'']);
  }

  console.log(props.confirm);

  function handleConfirm(){
    props.setShowAlert([false,'']);
    props.setConfirm(true);
  }

  return (
    <div className='alert'>
        <div className='alert-question'>
          <h3>  {(props.showAlert[1] === "Update")?arr[0].title:arr[1].title}  </h3>
          <p>  {(props.showAlert[1] === "Update")?arr[0].msg:arr[1].msg}  </p>
          <div>
            <button id = 'cancel' onClick = {handleCancel}>Cancel</button>
            <button id = 'confirm' onClick = {handleConfirm}>Confirm</button>
          </div>
        </div>
    </div>
  )
}

export default Alert