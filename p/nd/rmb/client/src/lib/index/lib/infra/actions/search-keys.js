export const GET_ALL_SEARCH_KEYS = 'GET_ALL_SEARCH_KEYS'
export const FILTER_SEARCH_KEYS = 'FILTER_SEARCH_KEYS'
export const RE_FILTER_SEARCH_KEYS = 'RE_FILTER_SEARCH_KEYS'
export const RECEIVE_SEARCH_KEYS = 'RECEIVE_SEARCH_KEYS'
export const BACK_FILTER_SEARCH_KEYS = 'BACK_FILTER_SEARCH_KEYS'

export function backFilterSearchKeys(searchKeys, query) {
  return {
    type: BACK_FILTER_SEARCH_KEYS,
    payload: searchKeys,
    query: query
  }
}

export function receiveAllSearchKeys(searchKeys) {
  return {
    type: RECEIVE_SEARCH_KEYS,
    payload: searchKeys,
    query: ''
  }
}