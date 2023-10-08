import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
  };

  render() {
    const { nextFishToName } = this.props;

    return (
      <div id="game-board">
        {nextFishToName ? (
          <>
            <div id="fish-container">
              <img src={nextFishToName.url} alt={nextFishToName.name} />
            </div>
            <form
              id="fish-guess-form"
              onSubmit={(e) => {
                e.preventDefault();
                let correct = false;
                if (this.state.fishGuess === nextFishToName.name) {
                  correct = true;
                }
                this.props.changeFishIndex(correct);
                this.setState({ fishGuess: "" });
              }}
            >
              <label htmlFor="fish-guess">What kind of fish is this?</label>
              <input
                type="text"
                name="fish-guess"
                value={this.state.fishGuess}
                onChange={(e) => {
                  this.setState({ fishGuess: e.target.value });
                }}
              />
              <input type="submit" />
            </form>
          </>
        ) : (
          null
        )}
      </div>
    );
  }
}
