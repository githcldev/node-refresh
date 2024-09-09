import {
  OPEN_IFRAME, CLOSE_IFRAME, OPEN_EXTERNAL_LINK_ON_SELF
} from '../actions'
export function openIframe(state = {
  'openIframe': false,
  'exLinkToOpenOnSelf': ''
}, action) {
  switch (action.type) {
    case OPEN_IFRAME:
      return {
        'openIframe': true,
        'exLinkToOpenOnSelf': ''
      }
    case CLOSE_IFRAME:
      return {
        'openIframe': false,
        'exLinkToOpenOnSelf': ''
      }
    case OPEN_EXTERNAL_LINK_ON_SELF:
      return {
        'openIframe': false,
        'exLinkToOpenOnSelf': action.value
      }
    default:
      return state
  }
}