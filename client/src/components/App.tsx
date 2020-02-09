import React from "react";
import InputForm from "./InputForm";
import ResultsTable from "./ResultsTable";
import { getWords } from "../services/words";
import WordModel from "../models/WordModel";

class App extends React.Component {
  state = {
    optional: [],
    required: [],
    excluded: []
  };

  matchingWords: WordModel[] = [];

  updateLetters = (o: string[], r: string[], e: string[]): void => {
    this.setState({
      optional: o,
      required: r,
      excluded: e
    });

    this.updateWords(o, r, e);
  };

  updateWords = (o: string[], r: string[], e: string[]): void => {
    this.matchingWords = getWords(o, r, e);
  };

  render() {
    return (
      <div className="app-container">
        <header className="banner">Winning Words</header>
        <div className="search-container">
          <InputForm
            updateLetters={this.updateLetters}
            optional={this.state.optional}
            required={this.state.required}
            excluded={this.state.excluded}
          />
          <div className="search-results-container">
            <ResultsTable matchingWords={this.matchingWords} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
