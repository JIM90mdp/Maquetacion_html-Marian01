import React from 'react'

const PlayButton = ({ propsStyles, children }) => {
  const buttonStyles = {
    padding: "0.4rem",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    border: "none",
    margin: "0.5rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    ...propsStyles,
  };
  // console.log("propsStyles: ", propsStyles)

  return <button style={buttonStyles}>{children}</button>;
}

export default PlayButton