export const REQUEST_REDIRECT = 'REQUEST_REDIRECT'

export function requestRedirect(redirect) {
  return {
    type: REQUEST_REDIRECT,
    payload: redirect
  }
}

