import React from "react";
import WordResult from "./WordResult";

interface Props {
  matchingWords: string[];
}

class ResultsTable extends React.Component<Props, {}> {
  render() {
    const renderEachWord: any = (this.props.matchingWords as string[]).map(item => {
      return (
        <WordResult
          key={item}
          word={item}
        />
      );
    });

    return <div>{renderEachWord}</div>;
  }
}

export default ResultsTable;
