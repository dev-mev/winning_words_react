import React from "react";
import InputForm, { Letters } from "./InputForm";
import ResultsTable from "./ResultsTable";

class App extends React.Component {
  state = {
    letters: {
      optional: [],
      excluded: [],
      required: []
    }
  };

  updateLetters = (lettersObject: Letters): void => {
    this.setState({ letters: lettersObject });
  };

  render() {
    return (
      <div className="app-container">
        <header className="banner">Winning Words</header>
        <div className="search-container">
          <InputForm updateLetters={this.updateLetters} />
        </div>
        <ResultsTable
          updateLetters={this.updateLetters}
          letters={this.state.letters}
        />
      </div>
    );
  }
}

export default App;
