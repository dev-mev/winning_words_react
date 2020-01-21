import React from "react";
import WordResult from "./WordResult";
import { Letters } from "./InputForm";
import { getWords } from "../services/words";

interface Props {
  updateLetters: (arg0: Letters) => void;
  letters: Letters;
}

class ResultsTable extends React.Component<Props, {}> {
  updateWords = (letters: Letters): void => {
    // TODO: change format
    // getWords(letters);
  };

  render() {
    const words = ["cat", "dog"];

    const renderEachWord = words.map(key => (
      <WordResult
        {...this.props}
        key={key}
        updateWords={this.updateWords}
        word={key}
      />
    ));

    return <div>{renderEachWord}</div>;
  }
}

export default ResultsTable;
