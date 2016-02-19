import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUnits, switchToUnit } from '../actions/actions_units';
import Radium from 'radium';
import color from 'color';
import colors from '../../style/colors';
import FaLeft from 'react-icons/lib/fa/angle-left';
import FaRight from 'react-icons/lib/fa/angle-right';

/*
 * TODO:
 * Add a tab that just says "..." if there are more tabs than are shown
 */

class UnitTabs extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUnits();
  }

  renderTabs() {
    if (!this.props.units.length) return <div>Loading...</div>;

    const activeIndex = _.findIndex(this.props.units, { unitId: this.props.id });
    const units = this.props.units.map((unit, i) => {
      const isFarAwayTab = (Math.abs(i - activeIndex) > 1) ?
        styles.isFarAwayTab :
        {};

      const isActive = (activeIndex === i) ?
        styles.isActive :
        {};

      return (
        <div
          onClick={() => this.props.switchToUnit(unit.unitId)}
          key={i + 1}
          style={[ styles.tab, isFarAwayTab, isActive ]}>
           {unit.name}
        </div>
      );
    });

    return [ this.arrowLeft(), ...units, this.arrowRight(units.length) ];
  }

  arrowLeft() {
    const click = () => {
      if (this.props.id === this.props.units[0].unitId) return;

      const newIndex = _.findIndex(this.props.units, { 'unitId': this.props.id }) -1;
      return this.props.switchToUnit(this.props.units[newIndex].unitId);
    };

    return (
      <div
        onClick={click}
        key={0}
        style={[ styles.tab, styles.arrowTab ]}>
        <FaLeft />
      </div>
    );
  }

  arrowRight(i) {
    const click = () => {
      const len = this.props.units.length - 1;
      if (this.props.id === this.props.units[len].unitId) return;

      const newIndex = _.findIndex(this.props.units, { 'unitId': this.props.id }) + 1;
      return this.props.switchToUnit(this.props.units[newIndex].unitId);
    };

    return (
      <div
        onClick={click}
        key={i + 2}
        style={[ styles.tab, styles.arrowTab ]}>
        <div style={{ float: 'right' }}><FaRight /></div>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.base}>
        {this.renderTabs()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { units: state.units.all, id: state.units.currentUnitId };
}

export default connect(mapStateToProps, { fetchUnits, switchToUnit })(Radium(UnitTabs));

const styles = {
  base: {
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    flex: 2,
    padding: 10,
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
    float: "left",
    ':hover': {
      background: color(colors.beige).lighten(0.075).hexString()
    }
  },
  isActive: {
    background: color(colors.beige).lighten(0.05).hexString()
  },
  isFarAwayTab: {
    display: "none"
  },
  arrowTab: {
    flex: 1
  }
};
