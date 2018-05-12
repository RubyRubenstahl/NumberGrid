import React from 'react';
import HundredsBoard from './HundredsBoard';
import theme from '../theme';

import {getPlaceValue} from '../util'
const numStyleFn = ({ num, selectedNum, overNum }) => {
  if(getPlaceValue(overNum, 1) === getPlaceValue(num, 1)){
    return {
      backgroundColor: theme.backgroundHilight1,
    }
  }

  if(getPlaceValue(overNum, 10) === getPlaceValue(num, 10)){
    return {backgroundColor: theme.backgroundHilight2}
  }
  return { backgroundColor: "inherit", color: "inherit" };
};


const digitStyleFn=({num, value, place, overNum, selectedNum})=>{
    const onesPlaceValue = getPlaceValue(overNum, 1);
    if(place===1 && value === onesPlaceValue) {
      return {color: theme.textHilight1, background:'none'}
    }

    const tensPlaceValue = getPlaceValue(overNum, 10);
    if(place===10 && value === tensPlaceValue) {
      return {color: theme.textHilight2,  background:'none'}
    }

};


const HighlightPlaceValues = props =>{


return <HundredsBoard  numStyleFn = {numStyleFn} digitStyleFn={digitStyleFn}/>

}

export default HighlightPlaceValues