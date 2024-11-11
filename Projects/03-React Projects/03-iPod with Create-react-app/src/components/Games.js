import gamesPic from "./images/games.jpg";

const style = {
  width: "210px",
  height: "175px",
};

function Games(props) {
  props.pr.controlFunctions.forward = () => {};
  props.pr.controlFunctions.backward = () => {};
  props.pr.controlFunctions.playAndPause = () => {};
  props.pr.controlFunctions.centerBtn = () => {};
  props.pr.controlFunctions.gestureForward = () => {};
  props.pr.controlFunctions.gestureReverse = () => {};
  return (
    <div id="games">
      <img style={style} src={gamesPic} alt=""></img>
    </div>
  );
}

export default Games;
