import { combineReducers } from 'redux'
import { core } from './core'
import { headerNav } from './header-nav'
import { user } from './user'
import { searchKeys } from './search-keys'
import { postsByReddit, selectedReddit } from './reddit'
import { openIframe } from './open-iframe'

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  user,
  searchKeys,
  headerNav,
  openIframe,
  core
})

export default rootReducer