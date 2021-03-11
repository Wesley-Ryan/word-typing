import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Logo from "../assets/typeLogo.png";

const color = "white";
const Navigation = () => {
  return (
    <div
      css={css`
        max-width: 1280px;
      `}
    >
      <nav
        css={css`
          padding: 1px;
          background-color: hotpink;
          font-size: 24px;
          height: 100px;
          display: flex;
        `}
      >
        <img
          src={Logo}
          alt="Logo"
          css={css`
            padding: 1%;
            width: 240px;
          `}
        />
      </nav>
    </div>
  );
};

export default Navigation;
