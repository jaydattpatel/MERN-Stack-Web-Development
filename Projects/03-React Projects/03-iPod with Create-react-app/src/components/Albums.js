import React, { useState } from "react";

import pic from "./images/albums.png";
import pic1 from "./images/albums(1).jpg";
import pic2 from "./images/albums(2).jpg";
import pic3 from "./images/albums(3).jpg";
import pic4 from "./images/albums(4).jpg";

const style = {
  width: "210px",
  height: "175px",
};

function Albums(props) {
  const arr = [pic, pic1, pic2, pic3, pic4];

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
      <img id="albumPic" style={style} src={arr[index]} alt="albumPic"></img>
    </div>
  );
}

export default Albums;
