import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import UserModal from './modal.component';

const MatchCard = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <UserModal
                show={visible}
                onHide={() => setVisible(false)}
                name={props.nameModal}
                snapchat={"Snapchat: " + props.snapchat}
                instagram={"Instagram: " + props.instagram}
                twitter={"Twitter: " + props.twitter}
                facebook={"Facebook: " + props.facebook}
                discord={"Discord: " + props.discord}
            ></UserModal>
            <Row className="justify-content-md-center">
                <Card className="m-5 border-0 shadow" style={styles.card}>
                    <Row>
                        <Col>
                            <Card.Img src="holder.js/100px180" src={props.imageSource} className="rounded-circle" />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title as="h1">{props.nameCard}</Card.Title>
                                <Card.Text as="h4">{props.personality}</Card.Text>
                                <Card.Text as="h6">{props.bio}</Card.Text>
                                <Button variant="info" size="lg" onClick={() => setVisible(true)}>Want to be friends?</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </div>
    )
}

const styles = {
    card: {
        borderRadius: 55,
        padding: '3rem',
        marginTop: 100,
        marginBottom: 100,
        width: "50%",
        backgroundColor: "#F0FDFA"
    }
}

export default MatchCard;