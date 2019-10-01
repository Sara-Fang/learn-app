import React, { Component } from "react";
import axios from "axios";

class FavorBtn extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    axios(
      `http://127.0.0.1:8000/add?question=${this.props.question}&answer=${this.props.answer}&fileName=${this.props.fileName}`
    )
      .then(function(response) {
        let data = response.data;
        alert(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.btnName}</button>;
  }
}

export default FavorBtn;
