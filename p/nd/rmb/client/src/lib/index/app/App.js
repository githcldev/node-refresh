import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/app.less';
import { requestRedirect } from '../lib/infra/actions'
import Cookies from 'js-cookie';
import TemplateTwo from './templates/two'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // Cookies.set('reqPage', 'ac', { path: '', expires: 1 });
    var cookie = Cookies.get('reqPage');
    if(typeof cookie === 'string'){
      if(cookie.length > 0) {
        let newRoutePath = '/index/' + cookie;
        this.props.dispatch(requestRedirect({
          redirect: true, redirectPath: newRoutePath }
        ))
      }
    }
    // let i = _csm('react').core()
    // let j = new i.default.Module_One()
    // j.consoleHello()

    C_SM().A_OL.hide()

    // _csm('react').overlay.prototype.text('Loading...')
    // _csm('react').overlay.prototype.show()
    
    console.log("cmsDistributionMode => " + cmsDistributionMode)
  }
  componentDidUpdate(prevProps) {
    console.log('component did update')
    if(this.props.redirect === true) {
      Cookies.remove('reqPage', { path: '' });
      this.props.dispatch(requestRedirect({
        redirect: false, redirectPath: '/' }
      ))
    }
  }
  render() {
    return (
      <Router>
        <TemplateTwo {...this.props} />
      </Router>
    )
  }
}
function mapStateToProps(state) {
  const { redirect, redirectPath } = state.core;
  const { user } = state;
  return {
    redirect, redirectPath, user
  }
}
export default connect(mapStateToProps)(App)
