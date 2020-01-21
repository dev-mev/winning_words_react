import React from "react";
import { Letters } from "./InputForm";

interface Props {
  updateLetters: (arg0: Letters) => void;
  updateWords: (arg0: Letters) => void;
  letters: Letters;
  word: string;
}

class Word extends React.Component<Props, {}> {
  render() {
    return <div>{this.props.word}</div>;
  }
}

export default Word;
