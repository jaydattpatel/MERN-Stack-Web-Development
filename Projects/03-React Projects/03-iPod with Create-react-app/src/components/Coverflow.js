import coverflowPic from "./images/coverflow.png";

const style = {
  width: "210px",
  height: "175px",
};

function Coverflow(props) {
  props.pr.controlFunctions.forward = () => {};
  props.pr.controlFunctions.backward = () => {};
  props.pr.controlFunctions.playAndPause = () => {};
  props.pr.controlFunctions.centerBtn = () => {};
  props.pr.controlFunctions.gestureForward = () => {};
  props.pr.controlFunctions.gestureReverse = () => {};
  return (
    <div id="coverflow">
      <img style={style} src={coverflowPic} alt="Coverflow"></img>
    </div>
  );
}

export default Coverflow;
