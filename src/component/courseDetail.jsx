import React from "react";
import Btn from "./startLearnBtn";
export default function CourseDetail(props) {
  return (
    <div>
      {props.curCourse}
      <p>{props.introduction}</p>
      <Btn courseName={props.curCourse} />
    </div>
  );
}
