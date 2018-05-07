import React, { Component } from "react";
import leftPad from "left-pad";
import Digit from "./Digit";

const NumberBox = props => {
  const {
    num,
    onNumClick = () => () => ({}),
    onNumMouseOver = () => () => ({}),
    onNumMouseOut = () => () => ({}),
    onNumMouseDown = () => () => ({}),
    onNumMouseUp = () => () => ({}),
    onNumTouchStart = () => () => ({}),
    onNumTouchEnd = () => () => ({}),
    numStyleFn = () => () => ({}),
    columns,
    style: propStyle
  } = props;
  const boxSize = 100 / columns + "%";

  const styles = {
    numberBox: {
      flexGrow: 1,
      fontSize: "4vmin",
      width: boxSize,
      height: boxSize,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "1px solid #EEE"
    }
  };

  const numString = leftPad(num, 2, 0);
  const digits = numString.split("");

  const generatedStyle = numStyleFn({ num });
  const finalStyle = { ...styles.numberBox, ...generatedStyle };
  return (
    <div
      style={finalStyle}
      onClick={onNumClick(props)}
      onMouseOver={onNumMouseOver(props)}
      onMouseOut={onNumMouseOut(props)}
      onMouseUp={onNumMouseUp(props)}
      onTouchEnd={onNumTouchEnd(props)}
      onTouchStart={onNumTouchStart(props)}
      onMouseDown={onNumMouseDown(props)}
    >
      {digits.map((digit, index) => (
        <Digit key={digit} value={digit} place={1} {...props} />
      ))}
    </div>
  );
};

export default NumberBox;
