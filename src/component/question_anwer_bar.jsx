import React from "react";
import { createStore } from "redux";

//defaultState + store + reducer
const defaultState = {
  QAlist: [],
  question: "",
  answer: ""
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_QA_TOLIST": {
      const newstate = JSON.parse(JSON.stringify(state));
      newstate.QAlist.push({
        question: newstate.question,
        answer: newstate.answer
      });
      return newstate;
    }
    case "CHANGE_QUE": {
      const newstate = JSON.parse(JSON.stringify(state));
      newstate.question = action.value;
      return newstate;
    }
    case "CHANGE_ANSWER": {
      const newstate = JSON.parse(JSON.stringify(state));
      newstate.answer = action.value;
      return newstate;
    }
  }
  return state;
};
const store = createStore(reducer);

export default class QuestionAnswerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handle_state_change);
  }
  handle_state_change = () => {
    this.setState(store.getState());
  };

  add_QA_tolist = () => {
    store.dispatch({
      type: "ADD_QA_TOLIST",
      value: { question: this.state.question, answer: this.state.answer }
    });
  };

  handle_Q_change = e => {
    store.dispatch({
      type: "CHANGE_QUE",
      value: e.target.value
    });
  };

  handle_A_change = e => {
    store.dispatch({
      type: "CHANGE_ANSWER",
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.question}
          onChange={this.handle_Q_change}
        ></input>
        <input
          type="text"
          value={this.state.answer}
          onChange={this.handle_A_change}
        ></input>
        <button onClick={this.add_QA_tolist}>add QA to list</button>
        <ul>
          {this.state.QAlist.map((item, index) => {
            return (
              <li key={index}>
                question is :{item.question} answer is:{item.answer}
                {/* <button onClick={this.deleteItem}>delete</button> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
