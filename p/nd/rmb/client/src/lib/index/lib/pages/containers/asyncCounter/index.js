import * as React from 'react'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, 
    INCREMENT_ASYNC, CANCEL_INCREMENT_ASYNC } from '../../../infra/actions'
class AsyncCounter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { counter, countdown, dispatch } = this.props
    const action = (type, value) => () => dispatch({ type, value })
    return ( 
      <div>
        <h1>Counter 1</h1>
        Clicked: { counter } times <button onClick = { action(INCREMENT) } > +</button> { ' '}
        <button onClick = { action(DECREMENT) } > -</button > { ' '}
        <button onClick = { action(INCREMENT_IF_ODD) } > Increment if odd</button > { ' '}
        <button onClick = { countdown? action(CANCEL_INCREMENT_ASYNC): action(INCREMENT_ASYNC, 5)}
          style = {{ color: countdown ? 'red' : 'black' }}>
            { countdown? `Cancel increment (${countdown})` : 'increment after 5s'}</button >
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { counter, countdown} = state
  return {
    counter, countdown
  }
}
export default connect(mapStateToProps)(AsyncCounter)