Meteor.startup(function () {
  
  if (Units.find().count() === 0) {
    var parsePacket = function (message) {
      // separate delimeted string into array
      var messageArray = message.split('/');

      return {
        unitId: Number(messageArray[0]),
        temperature: Number(messageArray[1]),
        waterLevel: Number(messageArray[2]),
        ventIsOpen: Number(messageArray[3]),
        light: Number(messageArray[4]),
        raw: message
      }
    };

    // Pain stakingly hardcode 24 hours of demo packets
    var createDemoPackets = function () {
      var dates = [];

      Packets.remove({});

      for (var i = 0; i <= 24; i = i + 4) {
        dates.push(moment().hour(i).minutes(0));
      }

      var units = [0, 1];

      var temps = [
        [65, 61, 64, 71, 76, 75, 70],
        [70, 65, 68, 69, 80, 75, 72]
      ];

      var waterLevels = [
        [0, 0, 0, 1, 1, 1, 1],
        [0, 1, 1, 2, 0, 2, 2]
      ];

      var vents = [
        [0, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 0]
      ];

      var light = 0;

      var packets = [];

      dates.forEach(function (e, i) {
        for (var j = 0; j < 2; j++) {
          var packet = parsePacket(units[j] + '/' + temps[j][i] + '/' + waterLevels[j][i] + '/' + vents[j][i] + '/' + light);
          packet.date = e;

          if (! Meteor.call("unitExists", packet.unitId)) {
            Meteor.call("createUnit", packet.unitId);
          }

          Meteor.call("storePacket", packet);
        }
      });
    };

    createDemoPackets( );
  }
} );
