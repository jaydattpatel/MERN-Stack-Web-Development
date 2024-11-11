import React from "react";
import "./css/screen.css";
import SideMenu from "./SideMenu.js";
import Coverflow from "./Coverflow.js";
import MusicMenu from "./MusicMenu.js";
// import Music from "./Music.js";
import AllSongs from "./AllSongs";
import Artists from "./Artists";
import Albums from "./Albums";
import Games from "./Games.js";
import Settings from "./Settings.js";

class Screen extends React.Component {
  getScreen() {
    // console.log("getScreen");
    const stack = this.props.screenStack;

    const lastScreen = () => {
      return stack[stack.length - 1];
    };

    if (this.props.display === "sidemenu") {
      return <SideMenu pr={this.props} />;
    }
    if (this.props.display === "coverflow") {
      if (lastScreen() !== "coverflow") {
        stack.push("coverflow");
      }
      return <Coverflow pr={this.props} />;
    }
    if (this.props.display === "music") {
      if (lastScreen() !== "music") {
        stack.push("music");
      }
      return <MusicMenu pr={this.props} />;
    }

    if (this.props.display === "allSongs") {
      if (lastScreen() !== "allSongs") {
        stack.push("allSongs");
      }
      return <AllSongs pr={this.props} />;
    }

    if (this.props.display === "artists") {
      if (lastScreen() !== "artists") {
        stack.push("artists");
      }
      return <Artists pr={this.props} />;
    }

    if (this.props.display === "albums") {
      if (lastScreen() !== "albums") {
        stack.push("albums");
      }
      return <Albums pr={this.props} />;
    }

    if (this.props.display === "games") {
      if (lastScreen() !== "games") {
        stack.push("games");
      }
      return <Games pr={this.props} />;
    }
    if (this.props.display === "settings") {
      if (lastScreen() !== "settings") {
        stack.push("settings");
      }
      return <Settings pr={this.props} />;
    }
  }

  // Display the sidemenu, coverflow, games,Music etc here
  render() {
    return <>{this.getScreen()}</>;
  }
}

export default Screen;
