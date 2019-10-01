import React from "react";
import CourseDetail from "./courseDetail";

//pass courseNames
function LeftGuide(props) {
  return (
    <>
      {props.courseNames.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.Clickme(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

export default class Gui extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curCourse: "React"
    };
  }

  SetCurCourse = text => {
    this.setState({ curCourse: text });
  };

  render() {
    const title = this.props.data.map(item => item.name);
    const detail = this.props.data.map(item => item.detail);
    return (
      <>
        <LeftGuide courseNames={title} Clickme={this.SetCurCourse} />
        <CourseDetail
          introduction={detail[title.indexOf(this.state.curCourse)]}
          curCourse={this.state.curCourse}
        />
      </>
    );
  }
}
