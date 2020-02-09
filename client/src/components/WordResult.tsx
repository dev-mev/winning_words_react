import React from "react";
import Word from "./Word";

interface Props {
  word: string;
}

class WordResult extends React.Component<Props, {}> {
  state = {
    definitionExpanded: false,
    definition: ""
  };

  getDefinition = (word: string): void => {
    fetch(`/api/dictionary/${encodeURIComponent(word)}`)
      .then(res => res.text())
      .then(text => {
        this.setState({
          definitionExpanded: !this.state.definitionExpanded,
          definition: text
        });
      });
  };

  render() {
    return (
      <div>
        <Word
          word={this.props.word}
          getDefinition={this.getDefinition}
        />
        {this.state.definitionExpanded ? (
          <div className="definition">{this.state.definition}</div>
        ) : null}
      </div>
    );
  }
}

export default WordResult;
