import React, { Fragment } from "react";
import Image from "./Image";
import config from "../config";

function Process() {
  return (
    <Fragment>
      <h1>My process</h1>
      <div style={{ paddingTop: "40px" }}>
        <p>
          My design process follows the <strong>Design Thinking</strong>{" "}
          combined with <strong>Design Sprint</strong> methodology. I believe it
          is critical to invest time in the first phase of research and{" "}
          <strong>empathize</strong> with the user — therefore my design
          decisions are grounded in evaluative <strong>user research</strong>,
          balancing <strong>business goals</strong> with{" "}
          <strong>user needs and motivations</strong>. At the beginning of each
          project I create a roadmap in order to meet all the deadlines.
        </p>
        <p style={{ paddingTop: "20px" }}>
          <br />
          <Image width="100%" src={`${config.imgBaseURL}/my_process`} />
        </p>
      </div>
    </Fragment>
  );
}

export default Process;
