import React, { Component } from "react";
import lookLeftImg from "../img/look-left.jpeg";
import lookRightImg from "../img/look-right.jpeg";

class SectionA extends Component {
  state = {
    lookLeft: undefined
  };

  btnClick = lookLeft => {
    // const leftDirection = () => (a === "left" ? true : false);
    this.setState({
      lookLeft
    });
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.lookLeft ? lookLeftImg : lookRightImg}
            alt=""
          />
        </div>
        <button
          className="btn"
          style={{ marginRight: "4px" }} //demo style insertion
          onClick={() => this.btnClick(true)}
        >
          ⭠
        </button>
        <button className="btn" onClick={() => this.btnClick(false)}>
          ⭢
        </button>
      </>
    );
  }
}

export default SectionA;
