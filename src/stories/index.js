import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import NumberGrid from '../components/NumberGrid/';
import NumberInfoBoard from '../components/NumberInfoBoard';

const hundredArray = new Array(100).fill(null).map((n, index) => index);
const thousandArray = new Array(1000).fill(null).map((n, index) => index);
const hundredArrayStartAt1 = new Array(100).fill(null).map((n, index) => index + 1);

const primary = "#777";
const highlight1 = "#ba12b0";
const highlight2 = "#10acc1";
const bgHighlight1 = "#FDF";
const bgHighlight2 = "#CFF";
const dim = "#CCC";

const evenStyleFn  = ({num}) => ({backgroundColor: num % 2 ===0 ? bgHighlight1 : null});
const highlightNth  = (n, start=0)=>({num}) => ({backgroundColor: num % (n+start) ===0 ? bgHighlight1 : null});

const highlightDigit  = digit => ({value, place, num}) => {
  const style = {color: value === digit ? highlight1 : dim};
  return style;
};

const highlightPlaceValue  = placeValue => ({value, place, num}) => {
  const style = {color: placeValue === place ? highlight1 : dim};

  return style;
};
// const highlightEvery


storiesOf('NumberGrid/Layouts', module)
  .add('Single Row', ()=>
      <NumberGrid numbers={[1,3,4,5]} columns={10}/>)
  .add('Hundres Board', () =>
      <NumberGrid numbers={hundredArray} columns={10}/>)
  .add('Thousands Board', () =>
      <NumberGrid numbers={thousandArray} columns={100}/>)
  .add('Hundres Board Start at 1', () =>
      <NumberGrid numbers={hundredArrayStartAt1} columns={10}/>)
  .add('5 Columns', () =>
      <NumberGrid numbers={hundredArray.slice(0,25).map(i=>i+1)} columns={5}/>)
  .add('5x5 ', () =>
      <NumberGrid numbers={hundredArray.slice(0,25).map(i=>i+1)} columns={5}/>);


storiesOf('NumberGrid/Numbers', module)
  .add('Hundreds EvenOdd', () =>
      <NumberGrid numbers={hundredArray} columns={10} numStyleFn={evenStyleFn}/>)
  .add('Highlight ever 3rd', () =>
      <NumberGrid numbers={hundredArray} columns={10} numStyleFn={highlightNth(3)}/>)
  .add('Highlight every 4th', () =>
      <NumberGrid numbers={hundredArray} columns={10} numStyleFn={highlightNth(4)}/>)
  .add('Mouse Interaction', () =>
      <NumberGrid
          numbers={hundredArray}
          columns={10}
          onNumMouseOver = {({num})=>action(`'onMouseOver ${num}`)}
          onNumMouseOut = {({num})=>action(`onNumMouseOut: ${num}`)}
          onNumMouseDown = {({num})=>action(`onNumMouseDown: ${num}`)}
          onNumMouseUp = {({num})=>action(`onNumMouseUp: ${num}`)}
          onNumTouchStart = {({num})=>action(`onNumTouchStart: ${num}`)}
          onNumTouchEnd = {({num})=>action(`onNumTouchEnd: ${num}`)}
      />);

storiesOf('NumberGrid/Digits', module)
    .add('Hightlight 3s', () =>
      <NumberGrid numbers={hundredArray} columns={10} digitStyleFn={highlightDigit(3)}/>)
  .add('Hightlight 4s', () =>
      <NumberGrid numbers={hundredArray} columns={10} digitStyleFn={highlightDigit(4)}/>)
    .add('Hightlight 5s', () =>
      <NumberGrid numbers={hundredArray} columns={10} digitStyleFn={highlightDigit(5)}/>)
  .add('Color Code Place Value', () =>
      <NumberGrid numbers={hundredArray} columns={10} digitStyleFn={highlightPlaceValue(1)}/>)
  .add('Mouse Interaction', () =>
      <NumberGrid
          numbers={hundredArray}
          columns={10}
          onDigitClick = {({value, place})=>action(`'onClick ${value}, place: ${place}`)}
          onDigitMouseOver = {({value, place})=>action(`'onMouseOver ${value}, place: ${place}`)}
          onDigitMouseOut = {({value, place})=>action(`onNumMouseOut: ${value}, place: ${place}`)}
          onDigitMouseDown = {({value, place})=>action(`onNumMouseDown: ${value}, place: ${place}`)}
          onDigitMouseUp = {({value, place})=>action(`onNumMouseUp: ${value}, place: ${place}`)}
          onDigitTouchStart = {({value, place})=>action(`onNumTouchStart: ${value}, place: ${place}`)}
          onDigitTouchEnd = {({value, place})=>action(`onNumTouchEnd: ${value}, place: ${place}`)}
      />);


storiesOf('NumberInfoBoard', module)
    .add('Zero', () =>
        <NumberInfoBoard num={0}/>)
    .add('Zero Text', () =>
        <NumberInfoBoard num={"00"}/>)
    .add('Twenty-five', () =>
        <NumberInfoBoard num={"25"}/>)
    .add('NinetyNine', () =>
        <NumberInfoBoard num={"99"}/>)




