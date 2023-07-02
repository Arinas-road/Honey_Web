import React from "react"
import ReactDOM from "react-dom"

const Backdrop = (props) => {
   console.log('drop');
   return(
         <div className="modal-backdrop" onClick={props.onClose}></div>
   )
}

const ModalOverlay = (props) => {
   return(
      <div className="modal-overlay">
         <div className="modal-overlay-main">{props.children}</div>
      </div>
   )
}

const portalElement = document.getElementById('overlay');
const Modal = (props) => {
   return(
      <div>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
      </div>
   )
}

export default Modal;