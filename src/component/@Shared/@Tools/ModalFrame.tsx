import React, { ReactNode } from "react";
import Modal from 'react-modal';

export interface ModalProp {
  isOpen: boolean,
  closeModal:any,
  children : ReactNode
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const ModalFrame = (prop:ModalProp) => {

  return (
    <Modal
      isOpen={prop.isOpen}
      onRequestClose={prop.closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      {prop.children ?? null}
    </Modal>


  );

}
export default ModalFrame;