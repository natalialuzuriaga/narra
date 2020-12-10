import React, { useState, useEffect } from 'react';
import MatchCard from "./matchCard.component";
import FlatList from "flatlist-react";
import axios from 'axios';

//object IDs for each personality type stored in db
const ENFP = "5fd1c4ce99d8e0880b65105c";
const INFP = "5fd1c53999d8e0880b65105d";
const INFJ = "5fd1c54299d8e0880b65105e";
const ENFJ = "5fd1c54299d8e0880b65105f";
const INTJ = "5fd1c54299d8e0880b651060";
const ENTJ = "5fd1c54299d8e0880b651061";
const INTP = "5fd1c54299d8e0880b651062";
const ENTP = "5fd1c54299d8e0880b651063";
const ISFP = "5fd1c54299d8e0880b651064";
const ESFP = "5fd1c54299d8e0880b651065";
const ISTP = "5fd1c54299d8e0880b651066";
const ESTP = "5fd1c54299d8e0880b651067";
const ISFJ = "5fd1c54299d8e0880b651068";
const ESFJ = "5fd1c54299d8e0880b651069";
const ISTJ = "5fd1c54299d8e0880b65106a";
const ESTJ = "5fd1c54299d8e0880b65106b";

const Match = (props) => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [dataFetched, setdataFetched] = useState(false);
  const [currentUser, setcurrentUser] = useState([]);
  //matches for personality types array
  const matches = [
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP, ISFP],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP, ESTJ],
    [INFJ, INTJ, INFP, ENFP, ENFJ, ENTJ, INTP, ENTP],
    [ENFJ, ESFJ, ESTJ],
    [ISFJ, ISTJ],
    [ESFJ, ESTJ],
    [ISFJ, ISTJ],
    [ESFP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ],
    [ISFP, ISTP, ISFJ, ESFJ, ISTJ, ESTJ],
    [ESFP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ],
    [ISFP, ISTP, ISFJ, ESFJ, ISTJ, ESTJ, INTP],
  ]

  //get currently logged in user
  //store user.personalityType in a variable
  //switch statement for each personality type
    //set var index to number based on personality case
  //declare array of potentialFriends
  //for length of array at matches[index]
    //get all people in db w that type and save in temp
    //potentialFriends = potentialFriends.concat(temp.users)
  //for each in potentialFriends
    //get entire user info and add to usersInfo
  //usersInfo has everything we need

  useEffect(() => {
    if (!dataFetched){
      const curUserID = "5fcc72aa929bc4383602a196";
      axios.get('http://localhost:3000/users/'+curUserID)
      .then(response => 
        
      )
      .catch((error) => {
        console.log(error);
      })
    }
  })
  

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
        list={usersInfo}
        renderItem={renderCard}
        renderWhenEmpty={() => <div>You have no suggested matches :(</div>}
      />
    </ul>
  )
}

export default Match;


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