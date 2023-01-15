import { session } from 'electron';
import AbstractHandler from '../AbstractHandler';

export default class UserAgentHandler extends AbstractHandler {
  handle(event) {
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
      details.requestHeaders['User-Agent'] = 'escanner';
      callback({ cancel: false, requestHeaders: details.requestHeaders });
    });
  }
}
