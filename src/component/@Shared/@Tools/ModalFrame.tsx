import React, { ReactNode, useState } from "react";
import Modal from 'react-modal';

interface ModalProp {
  id: string,
  isClose?: boolean,
  children: ReactNode
};
const ModalFrame = (prop: ModalProp) => {
  return (
    <div>
      <div className="modal fade" id={prop.id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${prop.id}-label`}>Modal title</h5>
              {prop.isClose ? close() : null}
            </div>
            {prop.children}
          </div>
        </div>
      </div>
    </div>
  );
}

const close = () => {
  return (
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

  );
}

export default ModalFrame;
