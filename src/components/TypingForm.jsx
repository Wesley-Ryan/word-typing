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
      <h4
        css={css`
          align-self: flex-end;
          padding: 2%;
          font-size: 24px;
        `}
      >
        Time remaining:{" "}
        <span style={{ color: timeRemaining < 9 ? "red" : "black" }}>
          {timeRemaining}
        </span>
      </h4>
      <textarea
        css={css`
          width: 90%;
          height: 350px;
          margin: 0 auto;
          border-radius: 10px;
        `}
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />

      <button
        onClick={startGame}
        disabled={isTimeRunning}
        css={css`
          width: 20%;
          padding: 1%;
          margin: 10px auto;
        `}
      >
        Start
      </button>
      {timeRemaining === 0 ? (
        alert(<h1>Word count: {wordCount}</h1>)
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default TypingForm;
