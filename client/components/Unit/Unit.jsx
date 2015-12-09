Unit = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    let packetQuery = { unitId: this.props.unitId },
        packetOptions = {
          sort: { createdAt: 1 },
          fields: {
            raw: 0
          }
        };

    var handle = Meteor.subscribe('unitPackets', { query: packetQuery, options: packetOptions}),
        data = {};

    if(handle.ready()) {
      data.packets = Packets.find(packetQuery, packetOptions).fetch();
    }

    return data;
  },

  currentPacket() {
    return _.last(this.data.packets);
  },

  currentStatus() {
    var packet = this.currentPacket(),
        statusProps = [
          { label: "Temperature", val: packet.temperature, unit: "°F" },
          { label: "Water Level", val: packet.waterLevel },
          { label: "Vent Status", val: packet.ventIsOpen },
          { label: "Light Level", val: packet.light }
        ];

    return (
      <CurrentStatus key={packet.unitId} statusProps={statusProps} />
    );
  },

  chart() {
    return (
      <Chart unitId={this.props.unitId} packets={this.data.packets} />
    );
  },

  render() {
    if (!this.data.packets) return (<p>Loading...</p>);

    return (
      <div>
        <div className="unit-container">
          {this.currentStatus()}
        </div>
        {this.chart()}
      </div>
    );
  }
});
