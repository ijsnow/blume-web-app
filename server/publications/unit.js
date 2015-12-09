Meteor.publish("units", function(query){
  return Units.find(query);
});
