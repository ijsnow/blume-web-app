import { FETCH_UNITS, SWITCH_UNIT } from '../actions/actions_units';

const INITIAL_STATE = { currentUnitId: 1, all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_UNITS:
      return { ...state, all: action.payload.data.units };
    case SWITCH_UNIT:
      return { ...state, currentUnitId: action.payload };
    default:
      return state;
  }
}
