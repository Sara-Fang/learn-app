import React from "react";
import QA from "./QA";
import FavorBtn from "./addFavor";

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QAshown: false,
      addShown: false,
      question: "",
      answer: ""
    };
  }
  toogleQA = () => {
    this.setState(state => ({
      QAshown: !state.QAshown
    }));
  };
  addQA = () => {
    this.setState(state => ({
      addShown: !state.addShown
    }));
  };
  questionChange = e => {
    this.setState({ question: String(e.target.value) });
  };
  answerChange = e => {
    var new_str = e.target.value
      .replace(/\n|\r\n/g, "<br>")
      .replace(/\s/g, "&nbsp;");
    console.log(new_str);
    this.setState({ answer: String(new_str) });
  };
  render() {
    return (
      <>
        <button onClick={this.addQA}>add a QA</button>
        <button onClick={this.toogleQA}> show/hide QA </button>
        <div
          style={{
            visibility: this.state.QAshown ? "visible" : "hidden"
          }}
        >
          <QA courseName={this.props.courseName} />
        </div>
        <div
          style={{
            visibility: this.state.addShown ? "visible" : "hidden"
          }}
        >
          question{" "}
          <textarea
            onChange={this.questionChange}
            style={{ width: 400, height: 100 }}
          />
          answer
          <textarea
            onChange={this.answerChange}
            style={{ width: 400, height: 100 }}
          />
          <FavorBtn
            question={this.state.question}
            answer={this.state.answer}
            btnName="submit"
            fileName={this.props.courseName}
          />
        </div>
      </>
    );
  }
}
