import "./css/allSongs.css";

import React, { useState } from "react";

import thumbnail from "./images/thumbnail.jpg";
import image1 from "./images/song(1).jpg";
import image2 from "./images/song(2).jpg";
import image3 from "./images/song(3).jpg";
import image4 from "./images/song(4).jpg";
import image5 from "./images/song(5).jpg";
import image6 from "./images/song(6).jpg";
import image7 from "./images/song(7).jpg";
import image8 from "./images/song(8).jpg";
import image9 from "./images/song(9).jpg";
import image10 from "./images/song(10).jpg";
import image11 from "./images/song(11).jpg";

import song from "./songs/TroyBoiAfterhours.mp3";
import song1 from "./songs/01-Exotic(Pitbull-Priyanka).mp3";
import song2 from "./songs/02-Rain Over Me (Pitbull-Marc).mp3";
import song3 from "./songs/03-Beautiful (Akon) .mp3";
import song4 from "./songs/04-Titanic (Unknown).mp3";
import song5 from "./songs/05-Club Can't Handle Me(FLO-RIDA).mp3";
import song6 from "./songs/06-Never Say Never (Justin-Jaden Smith).mp3";
import song7 from "./songs/07-Tonight(Pitbull).mp3";
import song8 from "./songs/08-I'm So Paid(Akon-Young Jeeze-Lil' Wayn).mp3";
import song9 from "./songs/09-She Doesn't Mind(Sean Paul).mp3";
import song10 from "./songs/10-Tokyo Drift(Pharrell Williams).mp3";
import song11 from "./songs/11-Na Na Na(Akon).mp3";

function AllSongs(props) {
  const arr = [
    [thumbnail, "Afterhours", "TroyBoi", song],
    [image1, "Exotic", "Pitbull-Priyanka", song1],
    [image2, "Rain Over Me ", "Pitbull-Marc", song2],
    [image3, "Beautiful ", "Akon)", song3],
    [image4, "Titanic ", "Unknown", song4],
    [image5, "Club Can't Handle Me", "FLO-RIDA", song5],
    [image6, "Never Say Never ", "Justin-Jaden Smith", song6],
    [image7, "Tonight", "Pitbull", song7],
    [image8, "I'm So Paid", "Akon-Young Jeeze-Lil' Wayn", song8],
    [image9, "She Doesn't Mind", "Sean Paul", song9],
    [image10, "Tokyo Drift", "Pharrell Williams", song10],
    [image11, "Na Na Na", "Akon", song11],
  ];

  const [index, setIndex] = useState(0);

  props.pr.controlFunctions.forward = () => {
    if (index === arr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    // console.log("forward index :", index);
  };
  props.pr.controlFunctions.backward = () => {
    if (index <= 0) {
      setIndex(arr.length - 1);
    } else {
      setIndex(index - 1);
    }
    // console.log("backward index :", index);
  };

  const playAndPause = () => {
    const audio = document.querySelector("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  props.pr.controlFunctions.playAndPause = playAndPause;
  props.pr.controlFunctions.centerBtn = playAndPause;

  props.pr.controlFunctions.gestureForward = () => {
    const audio = document.querySelector("audio");
    if (audio.volume < 1) {
      audio.volume = Math.min(1, audio.volume + 0.1); // Increase but don't exceed 1
    }
  };

  props.pr.controlFunctions.gestureReverse = () => {
    const audio = document.querySelector("audio");
    if (audio.volume > 0) {
      audio.volume = Math.max(0, audio.volume - 0.1); // Decrease but don't go below 0
    }
  };
  return (
    <div id="allSongs">
      <div className="thumbnail">
        <img src={arr[index][0]} alt="thumbnail"></img>
        <div className="song-details">
          <span>{arr[index][1]}</span>
          <small>{arr[index][2]}</small>
        </div>
      </div>

      <audio src={arr[index][3]} controls autoPlay></audio>
    </div>
  );
}

export default AllSongs;
