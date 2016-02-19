import { combineReducers } from 'redux';
import PacketsReducer from './reducer_packets';
import UnitsReducer from './reducer_units';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  packets: PacketsReducer,
  units: UnitsReducer
});

export default rootReducer;
