import {
  FETCH_LATEST_PACKET,
  FETCH_UNIT_PACKETS
} from '../actions/actions_packets';

const INITIAL_STATE = { latestPacket: {}, all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_LATEST_PACKET:
      return { ...state, latestPacket: action.payload.data };
    case FETCH_UNIT_PACKETS:
      return { ...state, all: action.payload.data.packets };
    default:
      return state;
  }
}
