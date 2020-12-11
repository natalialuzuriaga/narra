import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const UserModal = (props) => {
    return (
        <Modal centered show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.snapchat}</Modal.Body>
            <Modal.Body>{props.instagram}</Modal.Body>
            <Modal.Body>{props.facebook}</Modal.Body>
            <Modal.Body>{props.discord}</Modal.Body>
        </Modal>
    );
}

export default UserModal;