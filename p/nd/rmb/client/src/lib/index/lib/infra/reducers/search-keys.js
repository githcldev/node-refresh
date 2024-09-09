import { GET_ALL_SEARCH_KEYS, RECEIVE_SEARCH_KEYS, RE_FILTER_SEARCH_KEYS, BACK_FILTER_SEARCH_KEYS, FILTER_SEARCH_KEYS } from '../actions'

export function searchKeys(state = {
  prevSearchKey: "",
  filterSearchKeys: []
}, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_KEYS:
      return Object.assign({}, state, {
        prevSearchKey: action.query,
        filterSearchKeys: action.payload,
      })
    case FILTER_SEARCH_KEYS:
      let prevFilterSearchKeys = state.filterSearchKeys;
      return Object.assign({}, state, {
        prevSearchKey: action.payload,
        filterSearchKeys: window._.filter(prevFilterSearchKeys, function(i) { 
          return i.key.toLowerCase().startsWith(action.payload)
        })
      })
    case BACK_FILTER_SEARCH_KEYS:
      return Object.assign({}, state, {
        prevSearchKey: action.query,
        filterSearchKeys: window._.filter(action.payload, function(item) { 
          return item.key.toLowerCase().startsWith(action.query)
        })
      })
    default:
      return state
  }
}