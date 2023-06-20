import React from "react";

const PlayButton = ({ propsStyles, children }) => {
  // console.log("propsStyles: ", propsStyles)

  return (
    <button class="play_button-container-button">
      {children}

      <svg
        class="icon-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        fill="#00aaff"
      >
        <polygon points="5 3 19 12 5 21"></polygon>
      </svg>
    </button>
  );
};

export default PlayButton;
