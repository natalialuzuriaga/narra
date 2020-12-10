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

var potentialFriends = []

const Match = (props) => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [dataFetched, setdataFetched] = useState(false);
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

  function getInd(personality) {
    switch (personality) {
      case "ENFP":
        return 0;
      case "INFP":
        return 1;
      case "INFJ":
        return 2;
      case "ENFJ":
        return 3;
      case "INTJ":
        return 4;
      case "ENTJ":
        return 5;
      case "INTP":
        return 6;
      case "ENTP":
        return 7;
      case "ISFP":
        return 8;
      case "ESFP":
        return 9;
      case "ISTP":
        return 10;
      case "ESTP":
        return 11;
      case "ISFJ":
        return 12;
      case "ESFJ":
        return 13;
      case "ISTJ":
        return 14;
      case "ESTJ":
        return 15;
      default:
        return -1;
    }
  }

  //get currently logged in user
  //store user.personalityType in a variable
  //switch statement for each personality type
  //set var index to number based on personality case
  //declare array of potentialFriends(list of user IDs)
  //for length of array at matches[index]
  //get all people in db w that type and save in temp
  //potentialFriends = potentialFriends.concat(temp.users)
  //for each in potentialFriends
  //get entire user info and add to usersInfo
  //usersInfo has everything we need

  const addToUsersInfo = (user) => {
    let temp = usersInfo;
    temp.push(user);
    setUsersInfo(temp)
  }

  useEffect(() => {
    if (!dataFetched) {
      const curUserID = "5fcc72aa929bc4383602a196";
      axios.get('http://localhost:3000/users/' + curUserID)
        .then(response => {
          const i = getInd(response.data.personalityType);
          // console.log(matches[i]);
          //let potentialFriends = [];
          for (let j = 0; j < matches[i].length; j++) {
            axios.get('http://localhost:3000/types/' + matches[i][j])
              .then(response => {
                //console.log(potentialFriends)
                if (response.data.users !== null) {
                  var newArr = potentialFriends.concat(response.data.users)
                  potentialFriends = newArr;
                  //console.log(response.data.users)
                  console.log(potentialFriends.length)
                }
              })
              .catch((error) => {
                console.log(matches[i][j])
                console.log("error with getting potential matches ids");
              })
          }
          console.log("final length: " + newArr.length)
          for (let k = 0; k < potentialFriends.length; k++) {
            axios.get('http://localhost:3000/users/' + potentialFriends[k])
              .then(response => {
                addToUsersInfo({
                  name: response.data.firstName + " " + response.data.lastName,
                  personalityType: response.data.personalityType,
                  profilePicture: response.data.profilePicture,
                  biography: response.data.biography,
                  snapchat: response.data.snapchat,
                  instagram: response.data.instagram,
                  facebook: response.data.facebook,
                  discord: response.data.discord,
                })
                console.log(usersInfo)
              })
              .catch((error) => {
                console.log("error with getting user object and pushing into usersInfo");
              })
          }
          dataFetched = true;
        })
        .catch((error) => {
          console.log("nothing worked rip");
        })
    }
  })


  const renderCard = (person, idx) => {
    return (
      <MatchCard
        nameCard={person.name}
        personality={person.personalityType}
        bio={person.biography}
        imageSource={person.profilePicture}
        nameModal={person.name}
        snapchat={person.snapchat}
        instagram={person.instagram}
        twitter={person.discord}
      />
    );
  }
  if (dataFetched) {
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
  else {
    return (
      <div>Couldn't fetch anything:(</div>
    )
  }

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