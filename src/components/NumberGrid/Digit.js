import React, { Component } from "react";

const dummyEventHandler = () => () => ({});
const Digit = props => {
  const {
    num,
    place,
    value,
    digitStyleFn = () => ({}),
    onDigitClick = dummyEventHandler,
    onDigitMouseOver = dummyEventHandler,
    onDigitMouseOut = dummyEventHandler,
    onDigitMouseDown = dummyEventHandler,
    onDigitMouseUp = dummyEventHandler,
    onDigitTouchStart = dummyEventHandler,
    onDigitTouchEnd = dummyEventHandler,
  } = props;

  const generatedStyle = digitStyleFn({...props,...{style:null}, ...{value: parseInt(value)} });
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
