import React from "react";
import axios from "axios";

const favors = require(`../json/favorate.json`);
class FavorQA extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteItem = name => {
    axios(
      `http://127.0.0.1:8000/deleteFavor?question=${name}&fileName=favorate`
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
    return (
      <>
        <span style={{ border: "solid black 2px" }}>{this.props.question}</span>
        <button onClick={() => this.deleteItem(this.props.question)}>
          delete
        </button>
        <p style={{ border: "solid grey 2px" }}>
          {this.props.answer.split("<br>").map((item, index) => {
            return (
              <span key={index}>
                {item}
                <br />
              </span>
            );
          })}
        </p>
      </>
    );
  }
}

export default function Favorate() {
  return (
    <div>
      {favors.map((item, index) => (
        <FavorQA key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
