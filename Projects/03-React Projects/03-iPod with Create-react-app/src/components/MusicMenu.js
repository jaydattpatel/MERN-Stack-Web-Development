import React from "react";

function MusicMenu(props) {
  props.pr.controlFunctions.forward = () => {};
  props.pr.controlFunctions.backward = () => {};
  props.pr.controlFunctions.playAndPause = () => {};

  props.pr.controlFunctions.centerBtn = () => {
    const active = document.querySelector("#music-menu .active");
    if (active) {
      const selected = active.getAttribute("data-option");
      //console.log(selected);
      props.pr.setDisplay(selected);
    }
  };

  props.pr.controlFunctions.gestureForward = () => {
    const arr = document.querySelectorAll("#music-menu tr");
    let index = arr.length - 1;
    arr.forEach((tr, i) => {
      if (tr.classList.contains("active")) {
        tr.classList.remove("active");
        index = i;
      }
    });
    if (index === arr.length - 1) {
      arr[1].classList.add("active");
    } else {
      arr[index + 1].classList.add("active");
    }
  };
  props.pr.controlFunctions.gestureReverse = () => {
    const arr = document.querySelectorAll("#music-menu tr");
    let index = 1;
    arr.forEach((tr, i) => {
      if (tr.classList.contains("active")) {
        tr.classList.remove("active");
        index = i;
      }
    });
    if (index === 1) {
      arr[arr.length - 1].classList.add("active");
    } else {
      arr[index - 1].classList.add("active");
    }
  };

  return (
    <table id="music-menu">
      <tbody>
        <tr>
          <th className="table-heading">
            Music <i className="fas fa-music"></i>
          </th>
        </tr>
        <tr data-option="allSongs">
          <td className="table-item">
            All Songs<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
        <tr data-option="artists">
          <td className="table-item">
            Artists<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
        <tr data-option="albums">
          <td className="table-item">
            Albums<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MusicMenu;
