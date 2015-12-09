Chart = React.createClass({
  getInitialState() {
    return {
      graphBuffer: 15
    }
  },

  highBuffer(list) {
    return Math.max.apply({}, list) + this.state.graphBuffer;
  },

  lowBuffer(list) {
    return Math.min.apply({}, list) - this.state.graphBuffer;
  },

  componentDidMount() {

    var packets = this.props.packets,
        temperatures = _.pluck(packets, 'temperature'), // Y axis
        times = _.pluck(packets, 'createdAt'); // datetime objects. X axis

    // Set high and low so that the lines stay inside the grid
    var low = this.lowBuffer(temperatures),
        high = this.highBuffer(temperatures);

    var data = {
      labels: times,
      series: [
        temperatures
      ]
    },

    options = {
      fullWidth: true,
      chartPadding: {
        right: 30
      },
      showPoint: false,
      showArea: true,
      high: high,
      low: low,
      axisX: {
        labelInterpolationFnc: function (value, index) {
          // Every 4 hours
          var hours = moment(value).hours() % 4 === 0;
          // On the hour exactly
          var minutes = moment(value).minutes() === 0;

          // var label = moment(value).isBefore(moment().hours(0)) ?
          //             moment(value).format('h:mm a') + ', yesterday' :
          //             moment(value).format('h:mm a');
          var label = moment(value).format('h:mm a');

          return hours && minutes ? label : null;
          //return hours && minutes ? moment(value).minutes(0).format("h:mm a") : null;
          //return index % 10 === 0 ? moment(value).format("h:mm a") : null
        }
      },
      plugins: [
        Chartist.plugins.ctAxisTitle({
          axisX: {
            axisTitle: 'Time (mins)',
            axisClass: 'ct-axis-title',
            offset: {
              x: 0,
              y: 35
            },
            textAnchor: 'middle'
          },
          axisY: {
            axisTitle: 'Temperature',
            axisClass: 'ct-axis-title',
            offset: {
              x: 0,
              y: 15
            },
            textAnchor: 'middle',
            flipTitle: true
          }
        })
      ]
    },

    responsiveOptions = [
      ['max-width: 640px', {
        chartPadding: {
          right: 10
        },
        axisX: {
          labelInterpolationFnc: function (value, index) {
            // Every 4 hours
            var hours = moment(value).hours() % 4 === 0,
                // On the hour exactly
                minutes = moment(value).minutes() === 0,
                label = moment(value).format('h:mm');

            return hours && minutes ? label : null;
          }
        }
      }]
    ];

    this.state.chart = new Chartist.Line("#chart-container", data, options, responsiveOptions);
  },

  componentWillUnmount() {
    this.state.chart.detach();
  },

  render() {
    return (
      <div className="chart-wrapper">
        <div id="chart-container" className="ct-chart ct-perfect-fourth"></div>
      </div>
    );
  }
});
