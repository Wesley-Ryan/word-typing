import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Welcome = (props) => {
  return (
    <div
      className="shadow"
      css={css`
        width: 50%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        justfiy-content: center;
        flex-direction: column;
        height: 450px;
        padding: 1%;
      `}
    >
      <h1
        css={css`
          align-self: center;
        `}
      >
        Typeses
      </h1>
      <p>
        Welcome to the typing test that is on your side... No confusing text to
        copy, or penatlies for using backspace. Just hit go and let 60 seconds
        of keyboard bashing bring some light to your day.
      </p>
      <p
        css={css`
          font-size: 14px;
          align-self: center;
        `}
      >
        No Name or Email required, get straight to typing on the first platform
        built to benefit the test taker.{" "}
      </p>
      <p
        css={css`
          font-size: 10px;
          align-self: center;
        `}
      >
        Downloadable certificates coming soon.. For verication of your score
        please contact <a href="index.html">support@typses.com</a>
      </p>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        <button onClick={() => props.setIsModalVisible(!props.isModalVisible)}>
          Let's do it!
        </button>
        <button>Get me outta here</button>
      </div>
    </div>
  );
};

export default Welcome;
