UnitTabs = React.createClass({

  renderUnitTabs() {
    return this.props.unitsData.map((unit, i) => {
      return (
        <UnitTab key={i} unitData={unit} onClick={this.props.onClick} />
      );
    });
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="btn-group unit-tabs" role="group">
            {this.renderUnitTabs()}
          </div>
        </div>
      </div>
    );
  }
});
