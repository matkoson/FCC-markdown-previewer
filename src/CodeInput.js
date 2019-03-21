import React, { Component } from "react";
class CodeInput extends Component {
  render(props) {
    let fullScreen = this.props.fullScreen ? this.props.fullScreen : null;
    return (
      <div className={`code-input border-shadow-black ${fullScreen}`}>
        <div className="window-title ">
          <div className="window-title-logo">
            <i className="fa fa-fire" />
            <h2>Editor</h2>
          </div>
          <div className="window-title-arrows">
            <i
              id="arrow-input"
              className="fa fa-arrows-alt"
              onClick={e => this.props.arrowHandler(e)}
            />
          </div>
        </div>
        <textarea
          id="editor"
          className="code-input__input"
          defaultValue={this.props.defaultValue}
          onChange={event => this.props.inputHandler(event.target.value)}
        />
      </div>
    );
  }
}

export default CodeInput;
