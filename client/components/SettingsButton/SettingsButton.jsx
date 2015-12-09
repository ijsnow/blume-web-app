SettingsButton = React.createClass({

  onClick(e) {

  },

  label() {
    return <SettingsIcon />;
  },

  render() {
    return (
      <div className="settings-button">
        <Button
          text={this.label()}
          onClick={this.onClick} />
      </div>
    );
  }
});
