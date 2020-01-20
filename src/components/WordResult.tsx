import React from "react";
import Word from "./Word";
import Definition from "./Definition";
import { Letters } from "./InputForm";

interface Props {
  updateLetters: Function;
  updateWords: Function;
  letters: Letters;
}

class WordResult extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Word {...this.props} />
        <Definition />
      </div>
    );
  }
}

export default WordResult;
