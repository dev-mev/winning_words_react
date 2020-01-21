import React, { FormEvent } from "react";

export interface Letters {
  optional: string[];
  required: string[];
  excluded: string[];
}

interface Props {
  updateLetters: (arg0: object) => void;
}

class InputForm extends React.Component<Props, {}> {
  optionalLettersRef = React.createRef<HTMLInputElement>();
  requiredLettersRef = React.createRef<HTMLInputElement>();
  excludedLettersRef = React.createRef<HTMLInputElement>();

  findWords = (e: FormEvent): void => {
    e.preventDefault();
    const letters: Letters = {
      optional: this.optionalLettersRef!.current!.value.split(""),
      required: this.requiredLettersRef!.current!.value.split(""),
      excluded: this.excludedLettersRef!.current!.value.split("")
    };
    console.log(letters);
    this.props.updateLetters(letters);
  };

  render() {
    return (
      <form className="search-form float-top" onSubmit={this.findWords}>
        <div className="label-style">
          <input
            type="text"
            id="optional-letters"
            ref={this.optionalLettersRef}
          ></input>
          <label className="label-text" htmlFor="optional-letters">
            Letters
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
              Must Include
            </label>
          </div>
          <div className="label-style">
            <input
              type="text"
              id="excluded-letters"
              ref={this.excludedLettersRef}
            ></input>
            <label className="label-text" htmlFor="excluded-letters">
              Must Exclude
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputForm;
