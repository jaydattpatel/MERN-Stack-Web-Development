import "./css/controls.css";
import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";
import bottomArrow from "./images/arrow-pointing-downwards.png";
import rotateImage from "./images/rotate.png";

// introduce your own eventhandler for eac button Here.
function Controls() {
  return (
    <section id="controls">
      <div id="wheel">
        <span
          id="menu-button"
          className="buttons"
          style={{ top: 13, fontSize: "1.2rem" }}
        >
          Menu
        </span>
        <img
          className="buttons"
          id="left-button"
          draggable="false"
          src={leftArrow}
          alt="left"
          style={{ left: 13, width: 20 }}
        ></img>
        <img
          className="buttons"
          id="right-button"
          draggable="false"
          src={rightArrow}
          alt="right"
          style={{ right: 13, width: 20 }}
        ></img>
        <img
          className="buttons"
          id="play-pause-button"
          draggable="false"
          src={bottomArrow}
          alt="bottom"
          style={{ bottom: 13, width: 25 }}
        ></img>
        <div id="ok-button">
          <b></b>
        </div>
        <img
          className="buttons"
          id="gestureBtn"
          draggable="false"
          src={rotateImage}
          alt="bottom"
          style={{ width: 95 }}
        ></img>
      </div>
    </section>
  );
}

export default Controls;
