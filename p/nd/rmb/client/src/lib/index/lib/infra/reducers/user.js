import {
  REQUEST_LOGIN, REQUEST_LOGOUT, REQUEST_INFO
} from '../actions'
export function user(state = {
  'isLoggedIn': false
}, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
    case REQUEST_LOGOUT:
      return {
        'isLoggedIn': action.payload
      }
    default:
      return state
  }
}