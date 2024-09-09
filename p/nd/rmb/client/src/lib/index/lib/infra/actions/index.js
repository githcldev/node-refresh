import * as routers from './route'
export const { REQUEST_REDIRECT, requestRedirect } = routers

import * as openIframe from './open-iframe'
export const { OPEN_IFRAME, CLOSE_IFRAME, OPEN_EXTERNAL_LINK_ON_SELF } = openIframe

import * as searchKeys from './search-keys'
export const { GET_ALL_SEARCH_KEYS, FILTER_SEARCH_KEYS, RE_FILTER_SEARCH_KEYS, RECEIVE_SEARCH_KEYS, BACK_FILTER_SEARCH_KEYS, backFilterSearchKeys, receiveAllSearchKeys } = searchKeys

import * as posts from './posts'
export const { SELECT_REDDIT, INVALIDATE_REDDIT, REQUEST_POSTS, RECEIVE_POSTS,
  INCREMENT_FETCH, CANCEL_INCREMENT_FETCH, COUNTDOWN_FETCH_TERMINATED,
  selectReddit, invalidateReddit, requestPosts, receivePosts } = posts

import * as users from './user'
export const { REQUEST_LOGIN, REQUEST_LOGOUT, REQUEST_INFO,
  requestLogin, requestLogout } = users

import * as headerNavActions from './header-nav'
export const { HIDE_ALL_NAVS, TOGGLE_MAIN_NAV_VIEW, TOGGLE_USER_NAV_VIEW, TOGGLE_LANG_NAV_VIEW } = headerNavActions