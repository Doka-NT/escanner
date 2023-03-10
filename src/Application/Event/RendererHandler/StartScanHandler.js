import AbstractHandler from '../AbstractHandler';
import WifiScanTask from '../../Task/Main/WifiScanTask';

export default class StartScanHandler extends AbstractHandler {
  handle(event) {
    WifiScanTask.getInstance().start(5000);
  }
}
