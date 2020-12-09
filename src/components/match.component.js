import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

import {Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
//1:30:00

//use component as a functional react component because there is a lack of state and life cycle methods
//bc all we need to do is accept props and return jsx
// export default class Match extends Component {

    const styles = {
        card: {
          borderRadius: 55,
          padding: '3rem',
          marginTop: 100, 
          marginBottom: 100, 
          width: "50%"
        },
        cardImage: {
          objectFit: 'cover',
          borderRadius: 55
        }
      }

const Match = () => {
    const cardInfo = [
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Angela", mb: "ENFP", comp:"5"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Macy", mb: "INFP", comp:"4"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Anna", mb: "ENFJ", comp:"4"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Tanya", mb: "ESFJ", comp:"3"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Lex", mb: "ENFJ", comp:"3"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Angela", mb: "ENFP", comp:"5"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Macy", mb: "INFP", comp:"4"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Anna", mb: "ENFJ", comp:"4"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Tanya", mb: "ESFJ", comp:"3"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Lex", mb: "ENFJ", comp:"3"}
    ];

    const renderCard = (card, index) => {
        return (
            <Container fluid>
                 {/* <CardGroup className="m-5 d-block"> */}
                 <Row className="justify-content-md-center">
                    <Card className="m-5 border-0 shadow" style={styles.card}>
                    <Row>
                        <Col>
                        <Card.Img src="holder.js/100px180" src={card.image} className="rounded-circle"/>
                        </Col>
                        <Col>
                        <Card.Body>
                        <Card.Title as="h1">{card.title}</Card.Title>
                        <Card.Text as="h4">{card.mb}</Card.Text>
                        <Card.Text as="h5">{card.comp}</Card.Text>
                        </Card.Body>
                        </Col>
                    </Row>
                    </Card>
                </Row>
            </Container>            
        );
      };
    return <div>{cardInfo.map(renderCard)}</div>;
  
};

export default Match;
