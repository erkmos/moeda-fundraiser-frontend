import { createStore, applyMiddleware, Store } from 'redux';
import reduxSocketIo from 'redux-socket.io';
import reduxSaga from 'redux-saga';
import * as socketIoClient from 'socket.io-client';
import reducers, { RootState } from '../reducers';
import { getAddressBalanceSaga } from '../sagas';

export function configureStore(initialState?: RootState): Store<RootState> {
  const socket = socketIoClient(SOCKET_SERVER_URL);
  const socketMiddleare = reduxSocketIo(socket, 'server/');
  const sagaMiddleware = reduxSaga();
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    socketMiddleare, sagaMiddleware)(create);

  const store = createStoreWithMiddleware(reducers, initialState) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(getAddressBalanceSaga);

  return store;
}
