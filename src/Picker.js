import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class Picker extends Component {
  state = {
    date: new Date(),
    showDate: false,
  };

  onChange = (date) =>
    this.setState({
      date: date,
    });

  reset = () => {
    this.setState({
      showDate: false,
    });
    console.log("ca marche");
  };
  validation = () => {
    this.setState({
      showDate: true,
    });
  };

  render() {
    return (
      <div className="calendar">
        <div onClick={this.reset}>
          <Calendar
            onChange={this.onChange}
            selectRange={true}
            value={this.state.date}
          />
        </div>

        {/* <p>Date choisie : {this.state.date.toLocaleDateString()} </p> */}
        <button onClick={this.validation}>valider</button>
        {this.state.showDate ? (
          <div>
            <p>Du : {this.state.date[0].toLocaleDateString()} </p>
            <p>Au : {this.state.date[1].toLocaleDateString()} </p>
          </div>
        ) : null}
      </div>
    );
  }
}
