import React, { useState, useEffect, useRef } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const TypingForm = () => {
  const STARTING_TIME = 20;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          font-size: 24px;
        `}
      >
        <h2>Word Count: {wordCount}</h2>
        <h4
          css={css`
            padding: 2%;
          `}
        >
          Time remaining:{" "}
          <span style={{ color: timeRemaining < 9 ? "red" : "black" }}>
            {timeRemaining}
          </span>
        </h4>
      </div>
      <section style={{ margin: "0 auto", width: "100%", display: "flex" }}>
        <textarea
          css={css`
            width: 90%;
            font-size: 20px;
            height: 250px;
            border: 1px solid whitesmoke;
            border-radius: 10px;
            margin: 0 auto;
          `}
          ref={textBoxRef}
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
        />
      </section>
      <button
        onClick={startGame}
        disabled={isTimeRunning}
        css={css`
          width: 20%;
          padding: 1%;
          margin: 0 auto;
          margin-top: 20px;
        `}
      >
        Start
      </button>
    </div>
  );
};
export default TypingForm;
