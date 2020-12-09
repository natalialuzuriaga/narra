import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

const UserModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.bio}</Modal.Body>
            <Modal.Footer>
                <ToggleButton
                    type="checkbox"
                    variant="info"
                    //checked={checked}
                    value="1"
                    //onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                    Follow
        </ToggleButton>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;