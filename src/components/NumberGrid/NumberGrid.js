/**
 * Created by Mike on 1/3/2017.
 */
import React, { Component } from "react";
import propTypes from "prop-types";
import NumberBox from "./NumberBox";


class NumberGrid extends Component {
  render() {
    const {
      numbers=[],
      columns = 10,
      style: propStyle,
    } = this.props;

    // const styleFn = ({ num, digit, place }) => {};

    const styles = {
      container: {
        width: "100vmin",
        height: "100vmin",
        maxHeight: "7in",
        maxWidth: "7in",
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        padding: "16px",
        cursor: "pointer",
        color: "#666",
        userSelect: 'none'
      }
    };

    const finalStyle = ({...styles.container,...propStyle});


    return <div style={finalStyle}>
      {numbers.map(num=>
        <NumberBox
            key={num}
            num={num}
            {...this.props}
        />
      )}
    </div>;
  }
}

NumberGrid.propTypes = {};

export default NumberGrid;
