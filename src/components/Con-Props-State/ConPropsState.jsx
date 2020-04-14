import React, { Component } from "react";

export default class ConPropsState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOn: false,
      thumbsUp: true
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick = () => {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  };

  thumbsClick = () => {
    this.setState({
      thumbsUp: !this.state.thumbsUp
    });
  };

  render() {
    let claseIcono = this.state.toggleOn
      ? "fa fa-toggle-on"
      : "fa fa-toggle-off";
    let icon1 = "fa " + this.props.icon1;
    let icon2 = "fa " + this.props.icon2;
    let thumbsIcono = this.state.thumbsUp ? icon1 : icon2;

    let texto = this.state.toggleOn ? "On" : "Off";
    return (
      <div>
        <i className={claseIcono}></i>
        <button onClick={this.buttonClick}>{texto}</button>
        <div onClick={this.thumbsClick}>
          <i className={thumbsIcono}></i>
        </div>
      </div>
    );
  }
}
