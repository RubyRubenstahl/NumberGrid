import React, { Component } from "react";

const Digit = props => {
  const {
    num,
    place,
    value,
    digitStyleFn = () => ({}),
    onDigitClick = () => () => ({}),
    onDigitMouseOver = () => () => ({}),
    onDigitMouseOut = () => () => ({}),
    onDigitMouseDown = () => () => ({}),
    onDigitMouseUp = () => () => ({}),
    onDigitTouchStart = () => () => ({}),
    onDigitTouchEnd = () => () => ({})
  } = props;

  const generatedStyle = digitStyleFn({ value: parseInt(value), place, num });
  const style = generatedStyle;

  return (
    <span
      onClick={onDigitClick(props)}
      onMouseOver={onDigitMouseOver(props)}
      onMouseOut={onDigitMouseOut(props)}
      onMouseUp={onDigitMouseUp(props)}
      onTouchEnd={onDigitTouchEnd(props)}
      onTouchStart={onDigitTouchStart(props)}
      onMouseDown={onDigitMouseDown(props)}
      style={style}
    >
      {value}
    </span>
  );
};

export default Digit;
