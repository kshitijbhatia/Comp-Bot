import React from 'react'

function Message(props) {
    var message = props.message;
    var time = props.strTime;

    return (
    <div className='message'>
        <p>{message}</p>
        <h4>{time}</h4>
    </div>
  )
}

export default Message