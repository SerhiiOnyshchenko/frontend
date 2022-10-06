import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
   componentDidMount() {
      console.log('modal componentDidMount');
      window.addEventListener('keydown', this.handelKeyUp);
   }
   componentWillUnmount() {
      window.removeEventListener('keydown', this.handelKeyUp);
      console.log('modal componentWillUnmount');
   }
   handelKeyUp = e => {
      if (e.code === 'Escape') {
      }
   };
   handleBackdropClick = e => {
      if (e.target === e.currentTarget) {
         this.props.onClose();
      }
   };
   render() {
      return createPortal(
         <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
            <div className="Modal__content">{this.props.children}</div>
         </div>,
         modalRoot
      );
   }
}

export default Modal;
