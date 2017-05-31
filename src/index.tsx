import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { configureStore } from './store';
import { App } from './containers/App';
import { Main } from './containers/Main';
import { DEFAULT_LOCALE } from './constants';
import { translationMessages } from './i18n';

const store = configureStore();

function getRoot() {
  const elem = document.getElementById('root');
  if (elem === null) {
    return document.getElementById('reactindexroot');
  }

  return elem;
}

function getComponent() {
  const root = getRoot();
  if (root.id === 'root') {
    return (<App />);
  }

  return (<Main />);
}

translationMessages[DEFAULT_LOCALE]().then((messages) => {
  ReactDOM.render(
  <Provider store={store}>
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={messages}
    >
      {getComponent()}
    </IntlProvider>
  </Provider>,
  getRoot(),
  );
});

