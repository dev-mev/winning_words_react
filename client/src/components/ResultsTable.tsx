import React from "react";
import WordResult from "./WordResult";
import WordModel from "../models/WordModel";

interface Props {
  matchingWords: WordModel[];
}

class ResultsTable extends React.Component<Props, {}> {
  render() {
    const renderEachWord: any = (this.props.matchingWords as WordModel[]).map(item => {
      return (
        <WordResult
          key={item.word}
          word={item.word}
        />
      );
    });

    return <div className="search-result-button">{renderEachWord}</div>;
  }
}

export default ResultsTable;
