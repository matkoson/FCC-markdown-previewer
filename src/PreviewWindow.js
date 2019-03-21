import React, { Component } from "react";
class PreviewWindow extends Component {
  state = {};
  render() {
    let fullScreen = this.props.fullScreen ? this.props.fullScreen : null;
    return (
      <div className={`preview-window border-shadow-black ${fullScreen}`}>
        <div className="window-title">
          <div className="window-title-logo">
            <i className="fa fa-fire" />
            <h1>Previewer</h1>
          </div>
          <div className="window-title-arrows">
            <i
              id="arrow-preview"
              className="fa fa-arrows-alt"
              onClick={e => this.props.arrowHandler(e)}
            />
          </div>
        </div>
        <div
          id="preview"
          className="parsed-input"
          dangerouslySetInnerHTML={{
            __html: this.props.parsedInput && this.props.parsedInput
          }}
        />
      </div>
    );
  }
}

export default PreviewWindow;
