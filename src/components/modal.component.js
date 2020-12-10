import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const UserModal = (props) => {
    const [follow, setFollow] = useState(false);
    return (
        <Modal centered show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.snapchat}</Modal.Body>
            <Modal.Body>{props.instagram}</Modal.Body>
            <Modal.Body>{props.twitter}</Modal.Body>
            <Modal.Body>{props.facebook}</Modal.Body>
            <Modal.Body>{props.discord}</Modal.Body>
            <Modal.Footer>
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                        type="checkbox"
                        variant={follow ? "success" : "secondary"}
                        checked={follow}
                        value="1"
                        onChange={(e) => setFollow(e.currentTarget.checked)}
                    >
                        {follow ? "Following!" : "Follow"}
                    </ToggleButton>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;