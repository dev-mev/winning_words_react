import React from "react";

interface Props {
  word: string;
  getDefinition: (word: string) => any;
}

class Word extends React.Component<Props, {}> {
  render() {
    return (
      <div
        className="search-result"
        onClick={() => this.props.getDefinition(this.props.word)}
      >
        {this.props.word}
      </div>
    );
  }
}

export default Word;
