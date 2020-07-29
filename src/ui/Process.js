import React, { Fragment } from "react";
import myProcessImg from "../assets/img/myprocess.png";
function Process() {
  return (
    <Fragment>
      <h1>My process</h1>
      <p>
        My design process follows the Design Thinking combined with Kanban
        methodology. I believe it is critical to invest time in the first phase
        of research and empathizing with the user, and that time management is a
        priority - at the beginning of each project I create a roadmap in order
        to meet all the deadlines.
      </p>
      <p>
        <br />
        <img width="100%" src={myProcessImg} alt="" />
      </p>
    </Fragment>
  );
}

export default Process;
