import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import StatusProperty from './status_property';
import { connect } from 'react-redux';
import { fetchLatestPacket } from '../actions/actions_packets';
import { Link } from 'react-router';

class LatestPacket extends Component {

  componentWillMount() {
    this.fetchLatestPacket();
  }

  fetchLatestPacket() {
    this.props.fetchLatestPacket(this.props.id);
    this.fetchedId = this.props.id;
  }

  renderStatusProperties() {
    return (
      <div style={styles.base}>
        <StatusProperty
          type={'temperature'}
          unit={'F'}
          value={this.props.packet.temperature} />
        <StatusProperty
          type={'light'}
          unit={'lm'}
          value={this.props.packet.light} />
        <StatusProperty
          type={'water'}
          unit={'in'}
          value={this.props.packet.water} />
      </div>
    );
  }

  render() {
    if (this.fetchedId && this.fetchedId !== this.props.id) {
      this.fetchLatestPacket();
    }

    return (
      <div>
        <h3 style={styles.header}>Current Status</h3>
        {this.renderStatusProperties()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { packet: state.packets.latestPacket, id: state.units.currentUnitId };
}

export default connect(mapStateToProps, { fetchLatestPacket })(Radium(LatestPacket));

const styles = {
  base: {
    justifyContent: 'center',
    flex: 1,
    display: 'flex'
  },
  header: {
    marginTop: 10,
    marginLeft: 10
  }
};
