import React from "react";
import { Letters } from "./InputForm";

interface Props {
  updateLetters: (arg0: object) => void;
  updateWords: (arg0: string) => void;
  letters: Letters;
}



class Word extends React.Component<Props, {}> {
  render() {
    return <p>Word here</p>;
  }
}

export default Word;
