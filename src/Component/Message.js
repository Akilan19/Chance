import React from 'react'
import "./msg.css"

function Message(props) {
  return (
    <div className="outer">
    <div className="inner-im">
        <img src={props.im} />
    </div>

        <div className="inner-cen">
        <h1><bold>{props.ti}</bold></h1>
        <p>{props.ms}</p>
        </div>

        <div className="inner-rig">
        <div className="irt">
          <h4>{props.tim}</h4>
        </div>

        <div className="irn">
          <p><span>{props.nms}</span></p>
        </div>
        </div>
    </div>
  )
}

export default Message;