import initApi from '../api/index';
const api = initApi("packets");

export const FETCH_LATEST_PACKET = 'FETCH_LATEST_PACKET';
export const FETCH_UNIT_PACKETS = 'FETCH_UNIT_PACKETS';


// Get the latest packet for a given unit
export function fetchLatestPacket(id) {
  const request = api("get")(`/latest/${id}`); //axios.get(`${ROOT_URL}/packets/latest/${id}`);

  return {
    type: FETCH_LATEST_PACKET,
    payload: request
  };
}

// Get all the packets for a given unit
export function fetchUnitPackets(id) {
  const request = api("get")(`/unit/${id}`); //axios.get(`${ROOT_URL}/packets/unit/${id}`);

  return {
    type: FETCH_UNIT_PACKETS,
    payload: request
  };
}
