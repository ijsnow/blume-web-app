Meteor.publish("unitPackets", function (options) {
  return Packets.find(options.query, options.options);
});
