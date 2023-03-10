import { ipcRenderer } from 'electron';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import EventDict from '../../Domain/Dictionary/EventDict';
import { store } from './Store';
import StateStorage from '../../Infrastructure/Storage/StateStorage';
import createAgent from '../../Infrastructure/Monitoring';

if (!ipcRenderer.sendSync(EventDict.SYNC_IS_DEV)) {
  createAgent().startRendererAgent();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

const storage = new StateStorage(store.getState().settings);
