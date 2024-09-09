import React from 'react'
import './LoginLogout.less'
const LoginLogout = (props) => {
  function auth(e) {
    e.stopPropagation();
    if (props.isLoggedIn) props.userLogout()
    else props.userLogin()
  }
  return (
    <button onClick={auth}>
      {props.isLoggedIn ? 'Log Out' : 'Log In'}
    </button>
  )
}
export default LoginLogout
