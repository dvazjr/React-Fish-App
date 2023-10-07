import { Component } from "react";
import "./styles/score-board.css";
import { initialFishes } from "./ClassApp";

export class ClassScoreBoard extends Component {
  render() {
     const answersLeft = initialFishes.filter((fish, index) => index === 0);

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
            {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
