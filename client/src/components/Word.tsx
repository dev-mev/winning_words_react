import React from "react";

interface Props {
  word: string;
  getDefinition: (word: string) => any;
}

class Word extends React.Component<Props, {}> {
  render() {
    return (
      <button
        className="search-result"
        onClick={() => this.props.getDefinition(this.props.word)}
      >
        {this.props.word}
      </button>
    );
  }
}

export default Word;
