import React from "react";

function SideMenu(props) {
  // write logic for changing the selected item in the side menu
  props.pr.controlFunctions.forward = () => {};
  props.pr.controlFunctions.backward = () => {};
  props.pr.controlFunctions.playAndPause = () => {};

  props.pr.controlFunctions.centerBtn = () => {
    const active = document.querySelector("#side-menu .active");
    if (active) {
      const selected = active.getAttribute("data-option");
      // console.log(selected);
      props.pr.setDisplay(selected);
    }
  };

  props.pr.controlFunctions.gestureForward = () => {
    const arr = document.querySelectorAll("#side-menu tr");
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
    const arr = document.querySelectorAll("#side-menu tr");
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
    <table id="side-menu">
      <tbody>
        <tr>
          <th className="table-heading">
            iPod <i className="fas fa-home"></i>
          </th>
        </tr>
        <tr data-option="coverflow">
          <td className="table-item">
            Coverflow<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
        <tr data-option="music">
          <td className="table-item">
            Music<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
        <tr data-option="games">
          <td className="table-item">
            Games<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
        <tr data-option="settings">
          <td className="table-item">
            Settings<i className="fas fa-chevron-right"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SideMenu;
