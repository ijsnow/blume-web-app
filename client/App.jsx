App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    let unitQuery = {};

    var handle = Meteor.subscribe('units', unitQuery),
        data = {};

    if(handle.ready()) {
      data.units = Units.find(unitQuery).fetch();
    }

    return data;
  },

  renderUnitTabs() {
    var unitsData = this.data.units.map((unit, i) => {
      return {
        name: unit.name,
        key: i,
        isActive: this.props.activeUnit === i
      };
    });

    return <UnitTabs unitsData={unitsData} />;
  },

  render () {
    if (!this.data.units) return (<p>Loading...</p>);

    var unitId = this.data.units[this.props.activeUnit].unitId;

    return (
      <div className="container">
        {this.renderUnitTabs()}
        <SettingsButton />
        <div className="row">
          <div className="col-xs-12">
            <Unit unitId={unitId}/>
          </div>
        </div>
      </div>
    );
  }
});
