import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../infra/reducers/index'
import sagaMonitor from '../sagaMonitor'
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const middlewares = [sagaMiddleware]
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer)
    })
  }
  return {
    ...createStore(rootReducer, applyMiddleware(...middlewares)),
    runSaga: sagaMiddleware.run,
  }
}
