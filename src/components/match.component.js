import React, { Component, useState } from 'react';

import { Container } from 'react-bootstrap';
import MatchCard from "./matchCard.component";

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
  return(
    <div>
    <MatchCard/>
    <MatchCard/>
    <MatchCard/>
    <MatchCard/>
    </div>
  )
}

export default Match;
  // const [visible, setVisible] = useState(false);
  // const cardInfo = [
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Angela", mb: "ENFP", comp: "5" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Macy", mb: "INFP", comp: "4" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Anna", mb: "ENFJ", comp: "4" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Tanya", mb: "ESFJ", comp: "3" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Lex", mb: "ENFJ", comp: "3" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Angela", mb: "ENFP", comp: "5" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Macy", mb: "INFP", comp: "4" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Anna", mb: "ENFJ", comp: "4" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Tanya", mb: "ESFJ", comp: "3" },
  //   { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Lex", mb: "ENFJ", comp: "3" }
  // ];

  // return (
  //   <div>
  //     <UserModal show={visible} onHide={() => setVisible(false)}></UserModal>
  //     <Card className="m-5 border-0 shadow" style={styles.card}>
  //       <Row>
  //         <Col>
  //           <Card.Img src="holder.js/100px180" src={"https://i.insider.com/50f967f56bb3f7830a000019"} className="rounded-circle" />
  //         </Col>
  //         <Col>
  //           <Card.Body>
  //             <Card.Title as="h1">Angela</Card.Title>
  //             <Card.Text as="h4">INFP</Card.Text>
  //             <Card.Text as="h5">5</Card.Text>
  //             <Button variant="info" size="lg" onClick={() => setVisible(true)}>Want to be friends?</Button>
  //           </Card.Body>
  //         </Col>
  //       </Row>
  //     </Card>
  //     <Card className="m-5 border-0 shadow" style={styles.card}>
  //       <Row>
  //         <Col>
  //           <Card.Img src="holder.js/100px180" src={"https://i.insider.com/50f967f56bb3f7830a000019"} className="rounded-circle" />
  //         </Col>
  //         <Col>
  //           <Card.Body>
  //             <Card.Title as="h1">Angela</Card.Title>
  //             <Card.Text as="h4">INFP</Card.Text>
  //             <Card.Text as="h5">5</Card.Text>
  //             <Button variant="info" size="lg" onClick={() => setVisible(true)}>Want to be friends?</Button>
  //           </Card.Body>
  //         </Col>
  //       </Row>
  //     </Card>
  //     </div>
  // );
  // const renderCard = (card, index) => {
  //   return (
  //     <Container fluid>
  //       {/* <Modal show={true}></Modal> */}
  //       {/* <CardGroup className="m-5 d-block"> */}
  //       <Row className="justify-content-md-center">
  //         <Card className="m-5 border-0 shadow" style={styles.card}>
  //           <Row>
  //             <Col>
  //               <Card.Img src="holder.js/100px180" src={card.image} className="rounded-circle" />
  //             </Col>
  //             <Col>
  //               <Card.Body>
  //                 <Card.Title as="h1">{card.title}</Card.Title>
  //                 <Card.Text as="h4">{card.mb}</Card.Text>
  //                 <Card.Text as="h5">{card.comp}</Card.Text>
  //                 <Button variant="info" size="lg">Click to view more</Button>
  //               </Card.Body>
  //             </Col>
  //           </Row>
  //         </Card>
  //       </Row>
  //     </Container>
  //   );
  // };
  // return <div>{cardInfo.map(renderCard)}</div>;

