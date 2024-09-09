import {
  HIDE_ALL_NAVS, TOGGLE_MAIN_NAV_VIEW, TOGGLE_USER_NAV_VIEW, TOGGLE_LANG_NAV_VIEW
} from '../actions'

export function headerNav(state = {
  'siteName': '#LOGO-IS-HERE',
  'mainNavVisibility': false,
  'userNavVisibility': false,
  'langNavVisibility': false
}, action) {
  switch (action.type) {
    case HIDE_ALL_NAVS:
      return {
        'siteName': '#LOGO-IS-HERE',
        'mainNavVisibility': false,
        'userNavVisibility': false,
        'langNavVisibility': false
      }
    case TOGGLE_MAIN_NAV_VIEW:
      return {
        'siteName': '#LOGO-IS-HERE',
        'mainNavVisibility': action.payload,
        'userNavVisibility': false,
        'langNavVisibility': false
      }
    case TOGGLE_USER_NAV_VIEW:
      return {
        'siteName': '#LOGO-IS-HERE',
        'mainNavVisibility': false,
        'userNavVisibility': action.payload,
        'langNavVisibility': false
      }
    case TOGGLE_LANG_NAV_VIEW:
      return {
        'siteName': '#LOGO-IS-HERE',
        'mainNavVisibility': false,
        'userNavVisibility': false,
        'langNavVisibility': action.payload
      }
    default:
      return state
  }
}