import React, { useState } from "react";

import pic from "./images/artists.jpg";
import pic1 from "./images/artists(1).jpg";
import pic2 from "./images/artists(2).jpg";

const style = {
  width: "210px",
  height: "175px",
};

function Artists(props) {
  const arr = [pic, pic1, pic2];

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

  props.pr.controlFunctions.playAndPause = () => {};
  props.pr.controlFunctions.centerBtn = () => {};
  props.pr.controlFunctions.gestureForward = () => {};
  props.pr.controlFunctions.gestureReverse = () => {};
  return (
    <div>
      <img id="artistPic" style={style} src={arr[index]} alt="artistPic"></img>
    </div>
  );
}

export default Artists;
