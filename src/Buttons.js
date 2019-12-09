import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.previous();
          }}
        >
          {`< Previous`}
        </button>
        <button
          onClick={() => {
            this.props.next();
          }}
        >
          Next >
        </button>
      </div>
    );
  }
}

export default Buttons;
