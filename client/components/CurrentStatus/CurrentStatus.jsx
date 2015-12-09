CurrentStatus = React.createClass({

  renderStatusProperties() {
    return this.props.statusProps.map((statusProp, i) => {
      return <StatusProperty key={i} statusProp={statusProp} />;
    });
  },

  render() {
    return (
      <div className="current-status">
        {this.renderStatusProperties()}
      </div>
    );
  }
});
