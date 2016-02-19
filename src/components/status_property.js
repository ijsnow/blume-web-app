import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';
import colors from '../../style/colors';

class StatusProperty extends Component {
  render() {
    const label = _.capitalize(this.props.type);
    return (
      <div style={styles.base}>
        <strong>{label}:</strong><br/>
        <span>
          {`${this.props.value} ${this.props.unit}`}
        </span>
      </div>
    );
  }
}

export default Radium(StatusProperty);

var styles = {
  base: {
    flex: 1,
    height: '6em',
    padding: 10,
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
    float: "left",
    ':hover': {
      background: color(colors.beige).lighten(0.05).hexString()
    }
  }
};
