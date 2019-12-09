import React, { Component } from "react";
import data from "./data";
import Buttons from "../Buttons";
export class Functionality extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  next() {
    if (this.state.index >= data.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  previous() {
    if (this.state.index <= 0) {
      this.setState({ index: data.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  }

  render() {
    return (
      <div className="body">
        <header>
          <p className="home">HOME</p>
        </header>
        <div className="container">
          <p className="number">{data[this.state.index].id}/25</p>
          <div className="inner-container">
            <h2>
              {data[this.state.index].name.first}{" "}
              {data[this.state.index].name.last}
            </h2>
            <p>
              <b>From: </b>
              {data[this.state.index].city}, {data[this.state.index].country}
            </p>
            <p>
              <b>Job Title: </b>
              {data[this.state.index].title}
            </p>
            <p>
              <b>Employer: </b>
              {data[this.state.index].employer}
            </p>
            <br></br>
            <p>
              <b>Favorite Movies:</b>
              <ol>
                <li>{data[this.state.index].favoriteMovies[0]}</li>
                <li>{data[this.state.index].favoriteMovies[1]}</li>
                <li>{data[this.state.index].favoriteMovies[2]}</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="buttons">
          <Buttons next={this.next} previous={this.previous} />
        </div>
      </div>
    );
  }
}
export default Functionality;
