Button = React.createClass({
  shouldComponentUpdate(newProps) {
    // Update if its the new active button
    // OR if its the old active button
    return Boolean(newProps.isActive || this.props.isActive);
  },

  render() {
    var cls = "btn blume-btn" + (this.props.isActive ? " active" : "");

    return (
      <button
        key={this.props.key}
        className={cls}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
});
