import React from "react";
import WordResult from "./WordResult";
import { Letters } from "./InputForm";

interface Props {
  updateLetters: Function;
  letters: Letters;
}

class ResultsTable extends React.Component<Props, {}> {
  state = {
    words: ["cat", "dog"]
  };

  updateWords = (word: string): void => {
    this.setState({ words: [...this.state.words, word] });
  };

  render() {
    const renderEachWord = this.state.words.map(key => (
      <WordResult {...this.props} key={key} updateWords={this.updateWords} />
    ));

    return <div>{renderEachWord}</div>;
  }
}

export default ResultsTable;
