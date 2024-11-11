import React, { useState } from "react";

import MusicMenu from "./MusicMenu";
import AllSongs from "./AllSongs";
import Artists from "./Artists";
import Albums from "./Albums";

function Music(props) {
  props.pr.controlFunctions.forward = () => {};
  props.pr.controlFunctions.backward = () => {};
  props.pr.controlFunctions.playAndPause = () => {};
  props.pr.controlFunctions.centerBtn = () => {};
  props.pr.controlFunctions.gestureForward = () => {};
  props.pr.controlFunctions.gestureReverse = () => {};

  const { musicMenu, allSongs, artists, albums } = props.display;
  const activeItemInMenu = props.activeItemInMenu;
  return (
    <div className="display">
      {!musicMenu ? (
        allSongs ? (
          <AllSongs />
        ) : artists ? (
          <Artists />
        ) : (
          <Albums />
        )
      ) : (
        <MusicMenu activeItemInMenu={activeItemInMenu} />
      )}
    </div>
  );
}

export default Music;
