import React from "react";
import "./App.css";
import Screen from "./components/Screen.js";
import Controls from "./components/Controls.js";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.angle = 0;
    this.screenStack = ["sidemenu"];
    this.controlFunctions = {
      menuBack: () => {},
      forward: () => {},
      backward: () => {},
      playAndPause: () => {},
      centerBtn: () => {},
      gestureForward: () => {},
      gestureReverse: () => {},
    };

    this.state = {
      display: "sidemenu",
    };
  }

  menuBack = () => {
    if (this.screenStack.length > 1) {
      this.screenStack.pop();
      let previousScreen;
      if (this.screenStack.length === 1) {
        previousScreen = this.screenStack[0];
      } else {
        previousScreen = this.screenStack.pop();
      }
      this.setState({ display: previousScreen });
    }
  };

  setDisplay = (name) => {
    this.setState({ display: name });
  };

  // Handle the rotate event fired from the control component
  rotate() {
    const wheel = document.getElementById("wheel");
    const region = new ZingTouch.Region(wheel);

    const rotateAnimation = document.getElementById("gestureBtn");

    const rotateHandler = (event) => {
      if (Math.abs(this.angle - event.detail.angle) > 10) {
        if (event.detail.distanceFromLast > 0)
          this.controlFunctions.gestureForward();
        else this.controlFunctions.gestureReverse();
        this.angle = event.detail.angle;
      }
      const angleReverse = -event.detail.angle;
      rotateAnimation.style.transform = `rotateZ(${angleReverse}deg)`;
    };

    region.bind(wheel, "rotate", rotateHandler);
  }

  // If ok button is clicked,  open the selected component
  // If menu button is clicked, go back to the menu screen
  tap() {
    const region = new ZingTouch.Region(document.getElementById("wheel"));
    let menuBtn = document.getElementById("menu-button");
    let rightBtn = document.getElementById("right-button");
    let leftBtn = document.getElementById("left-button");
    let playPauseBtn = document.getElementById("play-pause-button");
    let okBtn = document.getElementById("ok-button");

    region.bind(
      menuBtn,
      "tap",
      () => {
        this.controlFunctions.menuBack();
      },
      false
    );
    region.bind(
      rightBtn,
      "tap",
      () => {
        this.controlFunctions.forward();
      },
      false
    );
    region.bind(
      leftBtn,
      "tap",
      () => {
        this.controlFunctions.backward();
      },
      false
    );
    region.bind(
      playPauseBtn,
      "tap",
      () => {
        this.controlFunctions.playAndPause();
      },
      false
    );
    region.bind(
      okBtn,
      "tap",
      () => {
        this.controlFunctions.centerBtn();
      },
      false
    );
  }

  render() {
    return (
      <div id="iPod-app">
        <div id="screen">
          <div id="top-bar">
            {`${(new Date().getHours() % 12)
              .toString()
              .padStart(2, 0)}:${new Date()
              .getMinutes()
              .toString()
              .padStart(2, 0)}  `}

            <span>iPod</span>
            <span>
              <i className="fas fa-wifi"></i>
              <i className="fas fa-battery-three-quarters"></i>
            </span>
          </div>
          <Screen
            display={this.state.display}
            setDisplay={this.setDisplay}
            screenStack={this.screenStack}
            controlFunctions={this.controlFunctions}
          />
        </div>
        <Controls />
      </div>
    );
  }
  componentDidMount() {
    this.controlFunctions.menuBack = this.menuBack;
    this.rotate();
    this.tap();
  }
}

export default App;
