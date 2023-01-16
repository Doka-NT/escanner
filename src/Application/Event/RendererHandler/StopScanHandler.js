import AbstractHandler from '../AbstractHandler';
import WifiScanTask from '../../Task/Main/WifiScanTask';

export default class StopScanHandler extends AbstractHandler {
  handle(event) {
    WifiScanTask.getInstance().stop();
  }
}
