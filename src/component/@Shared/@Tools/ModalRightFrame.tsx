import React, { ReactNode } from "react";
import Modal from 'react-modal';

export interface ModalProp {
  isOpen: boolean,
  closeModal:any,
  children : ReactNode
}

const customStyles = {
  content: {
    top: '0',
    left: '50%',
    right: '0',
    bottom: '0',
    'z-index':'2000'
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

const ModalRightFrame = (prop:ModalProp) => {
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
export default ModalRightFrame;