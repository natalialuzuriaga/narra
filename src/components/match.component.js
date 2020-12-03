import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
//1:30:00

//use component as a functional react component because there is a lack of state and life cycle methods
//bc all we need to do is accept props and return jsx
// export default class Match extends Component {

const Match = () => {
    const cardInfo = [
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Angela", text: "ENFP"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Macy", text: "INFP"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Anna", text: "ENFJ"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Tanya", text: "ISTJ"},
        {image: "https://i.insider.com/50f967f56bb3f7830a000019", title:"Lex", text: "ENFJ"},
    ];

    const renderCard = (card, index) => {
        return (
                    <Card style={{ width: "25rem" }} key={index} className="text-center">
                        <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
                        <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                    </Card>               
        );
      };
    return <div>{cardInfo.map(renderCard)}</div>;
  
};

export default Match;

