import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { fetchUnitPackets } from '../actions/actions_packets';
import { Link } from 'react-router';
import Chart from './chart';
import colors from '../../style/colors';

class UnitDetails extends Component {

  componentWillMount() {
    this.fetchUnitPackets();
  }

  fetchUnitPackets() {
    this.props.fetchUnitPackets(this.props.id);
    this.fetchedId = this.props.id;
  }

  render() {
    const temps = this.props.packets.map((packet) => packet.temperature);

    if (this.fetchedId && this.fetchedId !== this.props.id) {
      this.fetchUnitPackets();
    }

    return (
      <div style={styles.base}>
        <Chart data={temps} color={colors.olive} units="F" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { packets: state.packets.all, id: state.units.currentUnitId };
}

export default connect(mapStateToProps, { fetchUnitPackets })(Radium(UnitDetails));

const styles = {
  base: {
    flex: 3
  }
};
