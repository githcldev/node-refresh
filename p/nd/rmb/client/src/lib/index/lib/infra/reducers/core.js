import {
  REQUEST_REDIRECT
} from '../actions'
export function core(state = {
  'redirect': false,
  'redirectPath': '/'
}, action) {
  switch (action.type) {
    case REQUEST_REDIRECT:
      return {
          'redirect': action.payload.redirect,
          'redirectPath': action.payload.redirectPath
        }
    default:
      return state
  }
}