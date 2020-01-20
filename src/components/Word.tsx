import React from "react";
import { Letters } from "./InputForm";

interface Props {
  updateLetters: Function;
  updateWords: Function;
  letters: Letters;
}

class Word extends React.Component<Props, {}> {
  render() {
    return <p>Word here</p>;
  }
}

export default Word;
