import * as React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { requestLogin, requestLogout } from '../../../infra/actions'
import LoginLogout from '../../components/layout/modules/button/loginLogout'
function Login(props) {
  if(_.get(props, 'location.state.from.pathname', '').substring(0, 7) === '/indexp')
    alert("kindly login first");
  return (
    <div>
      <h1>Login 1</h1>
      <LoginLogout isLoggedIn={props.user.isLoggedIn} 
        userLogin={props.userLogin}
        userLogout={props.userLogout} />
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  userLogin: () => dispatch(requestLogin()),
  userLogout: () => dispatch(requestLogout())
})
function mapStateToProps(state) {
  const { user} = state
  return {
    user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)