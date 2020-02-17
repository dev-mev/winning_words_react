import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import React from "react";
import Word from "./Word";

interface Props {
  word: string;
}

class WordResult extends React.Component<Props, {}> {
  state = {
    definitionExpanded: false,
    definition: "loading..."
  };

  getDefinition = (word: string): void => {
    this.setState({ definitionExpanded: !this.state.definitionExpanded });
    fetch(`/api/dictionary/${encodeURIComponent(word)}`)
      .then(res => res.text())
      .then(text => {
        this.setState({ definition: text });
      });
  };

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          <Word
            word={this.props.word}
            getDefinition={this.getDefinition}
          />
          {this.state.definitionExpanded ? (
            <div className="definition">{this.state.definition}</div>
          ) : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default WordResult;
