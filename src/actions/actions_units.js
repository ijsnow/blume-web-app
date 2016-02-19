import initApi from '../api/index';
const api = initApi("units");

export const FETCH_UNITS = 'FETCH_UNITS';
export const SWITCH_UNIT = 'SWITCH_UNIT';

// Get the latest packet for a given unit
export function fetchUnits () {
  const request = api("get")("");

  return {
    type: FETCH_UNITS,
    payload: request
  };
}

export function switchToUnit (id) {
  return {
    type: SWITCH_UNIT,
    payload: id
  };
}
