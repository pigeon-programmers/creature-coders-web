import React from 'react'

const PopUp = (props) => {
  const {togglePopUp, open, children} = props

  console.log(children)
  return (
    <div>
      {open && (
        <div>

        <div className="modalscreen">
          <div className="popUp" id="popUp">
            <div className="popUp-header">
                <div className="Popup-Title">{children[0]}</div>
                <button onClick={togglePopUp} className="close-button">
                &times;
              </button>
            </div>
              <div className="popUp-body">
                {children[1]}
            </div>
          </div>
          <div onClick={togglePopUp} id="overlay"></div>
          </div>
          </div>
      )}
      </div>
  )
}

export default PopUp
