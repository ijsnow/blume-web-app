Meteor.methods({

  storePacket (options) {
    Packets.insert({
      unitId: options.unitId,
      temperature: options.temperature,
      waterLevel: options.waterLevel,
      ventIsOpen: options.ventIsOpen,
      light: options.light,
      raw: options.raw,
      createdAt: !options.date ? new Date() : options.date._d
    }, function (error, result) {
      if (error) {
        throw error;
      }
    });

    return true;
  },

  createUnit (unitId) {
    var id = Units.insert({
      unitId: unitId,
      name: "Unit " + (Units.find().count() + 1),
      description: 'No description',
      createdAt: new Date()
    }, function (error, result) {
      if (error) {
        throw error;
      }
    });

    return id;
  },

  unitExists (id) {
    return (Units.find({ unitId: id }).count() > 0);
  }
});
