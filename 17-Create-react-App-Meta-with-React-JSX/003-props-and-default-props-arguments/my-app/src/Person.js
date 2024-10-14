import React from "react";

class Person extends React.Component {
  constructor(props) {
    super();
    console.log("props :", props);
    this.state = {
      name: props.name,
    };
  }

  render() {
    // you can access props using this.props
    // console.log("props :", this.props);
    return (
      <>
        <h3>Name : {this.state.name}</h3>
      </>
    );
  }
}

// defining static default props
Person.defaultProps = {
  name: "Dummy Name",
};

export default Person;
