import React from "react";
import Word from "./Word";
import Definition from "./Definition";
import { Letters } from "./InputForm";

interface Props {
  updateLetters: (arg0: Letters) => void;
  updateWords: (arg0: Letters) => void;
  letters: Letters;
  word: string;
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
