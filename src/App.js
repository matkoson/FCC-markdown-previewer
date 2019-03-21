import React, { Component } from "react";
import "./App.sass";
import CodeInput from "./CodeInput";
import PreviewWindow from "./PreviewWindow";
import marked from "marked";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputValue:
      //   '<h1>Header</h1>\n <h2>Sub-header</h2>\n <a href="www.realmadryt.pl">Anchor</a>\n <code>Inline Code</code>\n <code>``multicode``</code>\n <li>List item</li>\n <blockquote>blockquote</blockquote>\n <img href ="../public/favicon.ico" />\n <strong>bolded</strong> ',
      inputValue:
        "# Heading\n## Sub-heading\n\n[This is a link.](https://www.freecodecamp.org)\n\n`This is inline code.`\n\n```\nThis is a code block.\n```\n\nThis is a list:\n* item 1\n* item 2\n* item 3\n\n> This is a blockquote.\n\n![Free Code Camp logo](https://dl.dropbox.com/s/lei6k4qqrvo23qb/freeCodeCamp-alternative.png)\n\n**This is bolded text.** aaa     ",
      parsedInput: "",
      fullScreen: ""
    };
    this.handleTextareaInput = this.handleTextareaInput.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }
  componentDidMount() {
    this.setState({ parsedInput: marked(this.state.inputValue) });
  }
  handleTextareaInput(input) {
    const parsed = marked(String(input));
    this.setState({ parsedInput: parsed });
  }
  handleArrowClick(input) {
    if (!this.state.fullScreen) {
      this.setState({ fullScreen: input.target.id });
    } else {
      this.setState({ fullScreen: "" });
    }
  }

  render() {
    if (!this.state.fullScreen) {
      return (
        <main className="app">
          <CodeInput
            arrowHandler={this.handleArrowClick}
            defaultValue={this.state.inputValue}
            inputHandler={this.handleTextareaInput}
          />
          <PreviewWindow
            arrowHandler={this.handleArrowClick}
            parsedInput={this.state.parsedInput}
          />
        </main>
      );
    } else if (this.state.fullScreen === "arrow-input") {
      return (
        <main className="app">
          <CodeInput
            fullScreen="full-screen"
            arrowHandler={this.handleArrowClick}
            defaultValue={this.state.inputValue}
            inputHandler={this.handleTextareaInput}
          />
        </main>
      );
    } else if (this.state.fullScreen === "arrow-preview") {
      return (
        <main className="app">
          <PreviewWindow
            fullScreen="full-screen"
            arrowHandler={this.handleArrowClick}
            parsedInput={this.state.parsedInput}
          />
        </main>
      );
    }
  }
}

export default App;
