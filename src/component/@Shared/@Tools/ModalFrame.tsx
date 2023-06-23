import { title } from "process";
import React, { ReactNode, useState } from "react";
import Modal from 'react-modal';

interface ModalProp {
  id: string,
  titleName?: string,
  isClose?: boolean,
  children: ReactNode
};
const ModalFrame = (prop: ModalProp) => {
  return (
    <div>
      <div className="modal fade" id={prop.id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {
              (prop.titleName != null && prop.titleName != undefined) ?
                (
                  <div className="modal-header">
                    <h5 className="modal-title" id={`${prop.id}-label`}>{prop.titleName}</h5>
                    {prop.isClose ? close() : null}
                  </div>
                ) : null
            }
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
