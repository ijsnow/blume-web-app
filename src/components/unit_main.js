import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';
import colors from '../../style/colors';
import { Link } from 'react-router';
import LatestPacket from './packets_latest';
import UnitDetails from './unit_details';
import UnitTabs from './unit_tabs';

class Unit extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div style={styles.base}>
        <UnitTabs switchToUnit={this.switchToUnit}/>
        <LatestPacket />
        <UnitDetails />
      </div>
    );
  }
}

export default Radium(Unit);

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
    maxWidth: 1000,
    backgroundColor: color(colors.beige).lighten(0.1).hexString(),
    marginTop: 10
  }
};
