function Settings(props) {
  props.pr.controlFunctions.forward = () => {};
  props.pr.controlFunctions.backward = () => {};
  props.pr.controlFunctions.playAndPause = () => {};
  props.pr.controlFunctions.centerBtn = () => {};
  props.pr.controlFunctions.gestureForward = () => {};
  props.pr.controlFunctions.gestureReverse = () => {};
  return (
    <div id="settings">
      <div>
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
}

export default Settings;
