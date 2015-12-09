StatusProperty = React.createClass({
  propTypes: {
    statusProp: React.PropTypes.object.isRequired
  },

  columnSize() {
    return Number(3).toString();
  },

  statusUnit() {
    return this.props.statusProp.unit ?
      (
        <span className="status-unit">
          {this.props.statusProp.unit}
        </span>
      ) : null;
  },

  render() {
    var colName = "col-md-" + this.columnSize() + " status-property-wrapper";

    return (
      <div className="status-property">
        <strong>{this.props.statusProp.label}:</strong> <br/>
        <span className="status-value">
              {this.props.statusProp.val}
        </span>
        {this.statusUnit()}
      </div>
    );
  }
});
