import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // console.log("this: ", this);
    console.log("constructor"); //This is the first call when the page loads
  }

  componentDidMount() {
    console.log("componentDidMount"); //This is the third call when the page loads
    this.timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate"); // This will be called when we update the state
  }
  componentWillUnmount() {
    console.log("componentWillUnmount"); //This will be called when the route  is changed
    clearInterval(this.timer);
  }
  render() {
    console.log("render"); //This is the second call when the page loads
    return (
      <>
        <h2>This is Profile Component</h2>
        {this.state.count}
        <button onClick={() => this.setState({ count: 1 })}>
          Change state
        </button>
      </>
    );
  }
}

export default Profile;
