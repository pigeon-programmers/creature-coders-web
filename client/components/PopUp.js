import React, { useState } from 'react'

const PopUp = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')

  const togglePopUp = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={togglePopUp} type="button">
        ?
      </button>
      {isOpen && (
        <div>
          <div className="popUp" id="popUp">
            <div className="popUp-header">
              <div className="title">{props.title}</div>
              <button onClick={togglePopUp} className="close-button">
                &times;
              </button>
            </div>
            <div className="popUp-body">
            {props.body}
            </div>
          </div>
          <div id="overlay"></div>
        </div>
      )}
      </div>
  )
}

export default PopUp
