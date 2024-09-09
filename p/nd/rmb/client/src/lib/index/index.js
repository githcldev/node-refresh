import '@babel/polyfill'
import * as React from 'react'
import _ from 'lodash'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import registerServiceWorker from './lib/config/registerServiceWorker'
import './main.css'
import configureStore from './lib/config/store/configureStore'
import rootSaga from './lib/infra/sagas'
import App from './app/App'

import * as C_SM from 'C_SM';
window["C_SM"] = C_SM;

function init(){
	// console.log('init')
	C_SM().A_START.init(function(status){
		if(status === false) {
			console.error('uncaught exception found')
			C_SM().A_ER.requiredResourceNotFound()
			return false;
		} else {
			window._ = _;
			window.React = React;
			const store = configureStore()
			store.runSaga(rootSaga)
			render(
			  <Provider store={store}>
			    <App />
			  </Provider>,
			  document.getElementById('app'),
			)		
		}
	})
}

if(typeof React !== 'undefined') init()

// registerServiceWorker();   // throughs error in production