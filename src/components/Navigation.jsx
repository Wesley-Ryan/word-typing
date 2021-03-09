import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const color = "white";
const Navigation = () => {
  return (
    <div>
      <nav
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            background-color: ${color};
          }
        `}
      >
        <p>I will be a nav bar some day</p>
      </nav>
    </div>
  );
};

export default Navigation;
