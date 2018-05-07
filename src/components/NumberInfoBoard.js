import React from 'react';
import isEmpty from 'lodash.isempty';

var converter = require('number-to-words');

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '3em'
  },
  numWord: {
    textTransform: 'capitalize'
  },
  number:{
    marginBottom: 5
  }

};


const NumberInfoBoard = props => {
  const {num} = props;
  const hasNum = num !== undefined && num !== null ;
  const displayNum = hasNum ? num : '?';
  const numWord = hasNum ? converter.toWords(num) : '';
  return (
      <div style={styles.container}>
        <h1 style={styles.number}>{displayNum}</h1>
        <span style={styles.numWord}>{numWord}</span>
      </div>
  );
};

export default NumberInfoBoard;