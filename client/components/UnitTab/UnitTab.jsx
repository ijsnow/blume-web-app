UnitTab = React.createClass({

  onClick(e) {
    //FlowRouter.go('/' + this.props.unitData.key);

    FlowRouter.withReplaceState(_.bind(function () {
      
      if (FlowRouter.current().route.name) {
        FlowRouter.go('/' + this.props.unitData.key.toString());
      }

      FlowRouter.setParams({ activeUnit: this.props.unitData.key.toString() });
    }, this));
  },

  render() {
    return (
      <Button
        key={this.props.key}
        isActive={this.props.unitData.isActive}
        text={this.props.unitData.name}
        onClick={this.onClick} />
    );
  }
});
