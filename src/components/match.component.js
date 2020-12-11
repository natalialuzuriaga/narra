import React, { useState, useEffect } from 'react';
import MatchCard from "./matchCard.component";
import FlatList from "flatlist-react";
import axios from 'axios';

//object IDs for each personality type stored in db
const ENFP = "5fd1c4ce99d8e0880b65105c";
const INFP = "5fd1c53999d8e0880b65105d";
const INFJ = "5fd1c54299d8e0880b65105e";
const ENFJ = "5fd1c54a99d8e0880b65105f";
const INTJ = "5fd1c55499d8e0880b651060";
const ENTJ = "5fd1c55899d8e0880b651061";
const INTP = "5fd1c56299d8e0880b651062";
const ENTP = "5fd1c56699d8e0880b651063";
const ISFP = "5fd1c56f99d8e0880b651064";
const ESFP = "5fd1c57499d8e0880b651065";
const ISTP = "5fd1c58299d8e0880b651066";
const ESTP = "5fd1c59599d8e0880b651067";
const ISFJ = "5fd1c5f599d8e0880b651068";
const ESFJ = "5fd1c5fc99d8e0880b651069";
const ISTJ = "5fd1c60399d8e0880b65106a";
const ESTJ = "5fd1c61299d8e0880b65106b";

//Compatibility chart for each personality type
const Match = (props) => {
  const [usersInfo, setUsersInfo] = useState([]);
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

  //function yeilds index of compatibility array to look in based on personality type
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

  const addToUsersInfo = (user) => {
    let temp = usersInfo;
    temp.push(user);
    setUsersInfo(temp)
  }
  //function to ultimately get list of potential matches for current user
    useEffect(() => {
    const curUserID = props.match.params.id;
    axios.get('http://localhost:3000/users/' + curUserID)
      .then(response => {
        const i = getInd(response.data.personalityType);
        for (let j = 0; j < matches[i].length; j++) {
          axios.get('http://localhost:3000/types/' + matches[i][j])
            .then(response => {
              if (response.data.users !== null) {
                const newArr = response.data.users;
                for (let k = 0; k < newArr.length; k++) {
                  if (newArr[k] === curUserID){
                    continue;
                  }
                  axios.get('http://localhost:3000/users/' + newArr[k])
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
                    })
                    .catch((error) => {
                      console.log("error with getting user object and pushing into usersInfo");
                    })
                }
              }
            })
            .catch((error) => {
              console.log(matches[i][j])
              console.log("error with getting potential matches ids");
            })
        }
      })
      .catch((error) => {
        console.log("nothing worked rip");
      })
      console.log();
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
        discord={person.discord}
        facebook={person.facebook}
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