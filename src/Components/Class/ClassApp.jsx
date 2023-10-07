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
  };

  changeFishIndex = (
    correct
  ) => {
    this.setState(
      (prevState) => ({
        fishIndex:
          prevState.fishIndex +
          1,
        correctCount:
          correct === true
            ? prevState.correctCount +
              1
            : prevState.correctCount,
        incorrectCount:
          correct === false
            ? prevState.incorrectCount +
              1
            : prevState.incorrectCount,
      })
    );
  };
  
  render() {
    return (
      <>
        <>
          <ClassScoreBoard
            fishes={
              this.state
                .fishes
            }
            incorrectCount={
              this.state
                .incorrectCount
            }
            correctCount={
              this.state
                .correctCount
            }
          />

          <ClassGameBoard
            nextFishToName={
              initialFishes[
                this.state
                  .fishIndex
              ]
            }
            changeFishIndex={
              this
                .changeFishIndex
            }
          />
        </>
        {false && (
          <ClassFinalScore />
        )}
      </>
    );
  }
}
