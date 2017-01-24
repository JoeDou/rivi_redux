import { FETCH_LIST, FETCH_CANDIDATE, CLEAR_CANDIDATE } from '../actions/index'

const INITIAL_STATE = { list: [], record: {} }

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_LIST:
      return { ...state, list: action.payload.data }
    case FETCH_CANDIDATE:
      return { ...state, record: action.payload.data }
    case CLEAR_CANDIDATE:
      return { ...state, record: {}}
    default:
      return state
  }
}
