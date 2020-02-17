import React, { FormEvent } from "react";

interface Props {
  updateLetters: (o: string, r: string, e: string) => void;
  optional: string;
  required: string;
  excluded: string;
  updateLoading: () => void;
  clearWords: () => void;
}

class InputForm extends React.Component<Props, {}> {
  optionalLettersRef = React.createRef<HTMLInputElement>();
  requiredLettersRef = React.createRef<HTMLInputElement>();
  excludedLettersRef = React.createRef<HTMLInputElement>();

  getUserLetters = (e: FormEvent): void => {
    e.preventDefault();
    this.props.clearWords();
    this.props.updateLoading();
    const optional = this.optionalLettersRef!.current!.value;
    const required = this.requiredLettersRef!.current!.value;
    const excluded = this.excludedLettersRef!.current!.value;
    this.props.updateLetters(optional, required, excluded);
  };

  render() {
    return (
      <form className="search-form float-top" onSubmit={this.getUserLetters}>
        <div className="label-style">
          <input
            type="text"
            id="optional-letters"
            ref={this.optionalLettersRef}
          ></input>
          <label className="label-text" htmlFor="optional-letters">
            Optional Letters
          </label>
        </div>

        <div className="sub-input-container">
          <div className="label-style">
            <input
              type="text"
              id="required-letters"
              ref={this.requiredLettersRef}
            ></input>
            <label className="label-text" htmlFor="required-letters">
              Must Include Letters
            </label>
          </div>
          <div className="label-style">
            <input
              type="text"
              id="excluded-letters"
              ref={this.excludedLettersRef}
            ></input>
            <label className="label-text" htmlFor="excluded-letters">
              Must Exclude Letters
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
