import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div style={styles.base}>
      <div style={styles.title}>Air Temperature</div>
      <div style={styles.chart}>
        <Sparklines height={120} width={180} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Avg: {average(props.data)} {props.units}</div>
      </div>
    </div>
  );
}

const styles = {
  base: {
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flex: 2
  },
  chart: {
    flex: 3
  }
};
