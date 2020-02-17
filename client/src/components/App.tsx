import React from "react";
import InputForm from "./InputForm";
import ResultsTable from "./ResultsTable";
import Loader from "react-loader-spinner";

class App extends React.Component {
  state = {
    optional: "",
    required: "",
    excluded: "",
    isLoading: false
  };

  matchingWords: string[] = [];

  updateLetters = (o: string, r: string, e: string): void => {
    this.setState({
      optional: o,
      required: r,
      excluded: e
    });

    this.updateWords(o, r, e);
  };

  updateWords = (o: string, r: string, e: string): any => {
    fetch(`/api/words?optional=${encodeURIComponent(o)}&required=${encodeURIComponent(r)}&excluded=${encodeURIComponent(e)}`)
    .then(res => res.json())
    .then(text => {
      this.matchingWords = text;
      this.setState({
        isLoading: false
      });
    });
  };

  clearWords = (): void => {
    this.matchingWords = [];
  }

  updateLoading = (): void => {
    this.setState({ isLoading: true });
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
            updateLoading={this.updateLoading}
            clearWords={this.clearWords}
          />
          <div className="search-results-container">
          <div className="loader">
            {this.state.isLoading ? (
              <Loader
                type="Puff"
                color="#620808"
                height={100}
                width={100}
                timeout={100000}
              />
            ) : null}
          </div>
            <ResultsTable matchingWords={this.matchingWords} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
