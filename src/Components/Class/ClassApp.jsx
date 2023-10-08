import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const incorrectCount = 0;
export const correctCount = 0;

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishes: initialFishes,
    fishIndex: 0,
    showFinalScore: false,
  };

  changeFishIndex = (
    correct
  ) => {
    this.setState(
      (prevState) => {
        const newFishes =
          prevState.fishes.filter(
            (_, index) =>
              index !== 0
          );
        const isFinalScore =
          newFishes.length ===
          0;

        return {
          fishes: newFishes,
          fishIndex: 0,
          correctCount:
            correct
              ? prevState.correctCount +
                1
              : prevState.correctCount,
          incorrectCount:
            !correct
              ? prevState.incorrectCount +
                1
              : prevState.incorrectCount,
          showFinalScore:
            isFinalScore,
        };
      }
    );
  };

  render() {
    return (
      <>
        {!this.state.showFinalScore && (
          <ClassScoreBoard
            fishes={this.state.fishes}
            incorrectCount={this.state.incorrectCount}
            correctCount={this.state.correctCount}
          />
        )}
  
        <ClassGameBoard
          nextFishToName={this.state.fishes[this.state.fishIndex]}
          changeFishIndex={this.changeFishIndex}
        />
  
        {this.state.showFinalScore && (
          <ClassFinalScore correctCount={this.state.correctCount} totalCount={initialFishes.length} />
        )}
      </>
    );
  }
}  