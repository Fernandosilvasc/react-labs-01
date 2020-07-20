import React, { Component } from "react";
import StudentListChild from "./StudentListChild";

class StudentListParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLoading: false
    };
  }

  btnClick = () => {
    const newArr = this.shuffle(this.state.arr);
    this.setState({
      arr: [...newArr]
    });
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  componentDidMount() {
    //api call should be here
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        arr: [
          "Randall Malfoy",
          "Kvothe Black",
          "Chun Zorander",
          "Leomund Ridcully",
          "Rary Stibbons",
          "Gandalf Dresden",
          "Zeddicus Doom"
        ],
        isLoading: false
      });
    }, 3000);
  }

  render() {
    const { isLoading, arr } = this.state;
    if (!isLoading) {
      return (
        <div>
          <h2>Challenge 2</h2>
          <StudentListChild isLoading={isLoading} students={arr} />
          {arr.length && (
            <button className="btn large" onClick={this.btnClick}>
              Randomize
            </button>
          )}
        </div>
      );
    }
    return (
      <div>
        <h2>Challenge 2</h2>
        <StudentListChild isLoading={isLoading} students={arr} />
      </div>
    );
  }
}

export default StudentListParent;
