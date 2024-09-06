import * as React from 'react'
import { connect } from 'react-redux'
import { INCREMENT_FETCH, CANCEL_INCREMENT_FETCH,
  selectReddit, invalidateReddit } from '../../../infra/actions'
import Picker from '../../components/Picker'
import Posts from '../../components/Posts'
class CancelAsync extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit))
  }
  handleRefreshClick(e) {
    e.preventDefault()
    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
  }
  render() {
    const { selectedReddit, posts, isFetching,
      lastUpdated, dispatch } = this.props
    const action = (type, value) => () => dispatch({ type, value })
    return ( 
      <div>
        <h1>CancelAsync 1</h1>
        <Picker value={selectedReddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
        <button onClick={action(INCREMENT_FETCH)} style={{ color: 'black' }}>{'INCREMENT_FETCH'}</button>
        <button onClick={action(CANCEL_INCREMENT_FETCH)} style={{ color: 'red' }}>
        {'CANCEL_INCREMENT_FETCH'}</button>
        <p>
        {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}. </span>}
        {!isFetching && (<a href="#" onClick={this.handleRefreshClick}>Refresh</a>)}</p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && (<div style={{ opacity: isFetching ? 0.5 : 1 }}>
        <Posts posts={posts} /></div>)}
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { selectedReddit, postsByReddit} = state
  const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: [],
  }
  return {
    selectedReddit, posts, isFetching, lastUpdated
  }
}
export default connect(mapStateToProps)(CancelAsync)