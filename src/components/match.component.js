import React from 'react';
import MatchCard from "./matchCard.component";
import FlatList from "flatlist-react";

const Match = (props) => {
  const cardInfo = [
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Angela", mb: "ENFP", comp: "5" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Macy", mb: "INFP", comp: "4" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Anna", mb: "ENFJ", comp: "4" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Tanya", mb: "ESFJ", comp: "3" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Lex", mb: "ENFJ", comp: "3" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Angela", mb: "ENFP", comp: "5" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Macy", mb: "INFP", comp: "4" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Anna", mb: "ENFJ", comp: "4" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Tanya", mb: "ESFJ", comp: "3" },
    { image: "https://i.insider.com/50f967f56bb3f7830a000019", title: "Lex", mb: "ENFJ", comp: "3" }
  ];

  const renderCard = (person, idx) => {
    return (
      <MatchCard
        nameCard={person.title}
        personality={person.mb}
        bio={"I love to bake, go backpacking and travel:) I'm always down to go chill at the beach or anywhere with nature! hmu if you wanna be friends"}
        imageSource={person.image}
        nameModal={person.title}
        snapchat={"angela"}
        instagram={"angela"}
        twitter={"angela"}
      />
    );
  }
  return (
      <ul>
        <FlatList
          list={cardInfo}
          renderItem={renderCard}
          renderWhenEmpty={() => <div>You have no suggested matches :(</div>}
        />
      </ul>
  )
}

export default Match;