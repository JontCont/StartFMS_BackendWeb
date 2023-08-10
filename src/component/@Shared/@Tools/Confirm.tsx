import { useEffect, useRef, useState } from "react";
import ModalFrame from "./ModalFrame";
import { Button, Modal } from "react-bootstrap";

export interface ConfirmProp {
    isOpen: boolean,
    onCancel: () => void,
    onConfirm: () => void,
};

const Confirm = (prop: ConfirmProp) => {
    return (
        <div>
            <Modal show={prop.isOpen} onHide={() => { prop.onCancel() }}>
                <Modal.Header closeButton={false}>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { prop.onConfirm(); }}>Yes</Button>
                    <Button variant="secondary" onClick={() => { prop.onCancel();}}>No</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default Confirm;