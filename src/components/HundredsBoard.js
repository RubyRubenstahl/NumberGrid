/**
 * Created by Mike on 1/3/2017.
 */
import React, { Component } from "react";
import propTypes from "prop-types";
import NumberGrid from "./NumberGrid/";
import chalkboard from "./chalkbaord.jpg";
import NumberInfoBoard from "./NumberInfoBoard";
const styles = {
  container: {
    display: "flex",
    letterSpacing: "2pt",
    width: '100vmin',
    height: '100vmin'
  },
  board: {
    // transform: "rotate(0.003turn) ",
    backgroundImage: `url("${chalkboard}"`,
    border: "9px solid #754c0e",
    color: "#DDD",
    margin: 0
  },
  numberInfoBoard: {
    backgroundImage: `url("${chalkboard}"`,
    border: "9px solid #754c0e",
    color: "#DDD",
    marginLeft: 32,
    width: 350
  },
  numberInfoBoardText: {
    transform: "rotate(0.003turn)",
    color: "#FFF",
    opacity: ".8"
  }
};

class HundredsBoard extends Component {
  state = { overNum: null, selectedNum: null };



  handleNumMouseOver = ({ num }) => e => {
    this.setState({ overNum: num });
    if(this.props.onNumMouseOver){
      this.props.onNumMouseOver({num, overNum: this.state.overNum, selectedNum: this.state.selectedNum});
    }
  };

  handleNumClick = ({ num }) => e => {
    this.setState({ selectedNum: num });
    if(this.props.onSelectedNumChanged){
      this.props.onSelectedNumChanged(num);
    }
  };

  numbers = new Array(100).fill(null).map((n, index) => index);
  render() {
    const { ...props } = this.props;
    const { overNum, selectedNum } = this.state;
    return (
      <div style={styles.container}>
        <NumberGrid
          style={styles.board}
          columns={10}
          numbers={this.numbers}
          onNumMouseOver={this.handleNumMouseOver}
          onNumClick={this.handleNumClick}
          overNum={overNum}
          selectedNum={selectedNum}
          {...props}
        />

        <div style={styles.numberInfoBoard}>
          <div style={styles.numberInfoBoardText}>
            <NumberInfoBoard style={styles.numberInfoBoard} num={selectedNum} />
          </div>
        </div>
      </div>
    );
  }
}

HundredsBoard.propTypes = {};

export default HundredsBoard;
