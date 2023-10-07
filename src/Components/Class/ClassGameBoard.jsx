import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
  }
  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={this.props.nextFishToName.url} alt={this.props.nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={
          (e) => {
            e.preventDefault();
            let correct = false;
            if (this.state.fishGuess === this.props.nextFishToName.name) {
              correct = true
            }
            this.props.changeFishIndex(correct)
          }
        }>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" value={this.state.fishGuess} onChange={(e) => {
            this.setState({fishGuess: e.target.value})
          }}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
