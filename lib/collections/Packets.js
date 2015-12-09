Packets = new Mongo.Collection("packets", {
  transform (packet) {

    packet.ventIsOpen = enumManager.map('ventIsOpen', packet.ventIsOpen);
    packet.light = enumManager.map('light', packet.light);
    packet.waterLevel = enumManager.map('waterLevel', packet.waterLevel);

    return packet;
  }
});
