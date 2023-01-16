import logger from '../../../Infrastructure/Logger';
import AbstractIntervalTask from '../AbstractIntervalTask';
import WiFiFactory from '../../../Infrastructure/WiFi';

class WifiScanTask extends AbstractIntervalTask {
  static __instance = new WifiScanTask();

  static getInstance() {
    return this.__instance;
  }

  start(intervalSeconds) {
    if (this.isStarted()) {
      return;
    }

    logger.info('Starting wifi scan task');
    super.start(intervalSeconds);
  }

  _iteration() {
    const wifi = WiFiFactory.getInstance().getNodeWifi();

    // Scan networks
    wifi.scan((error, networks) => {
      if (error) {
        logger.error(error);
      } else {
        logger.info(networks);
        /*
                networks = [
                    {
                      ssid: '...',
                      bssid: '...',
                      mac: '...', // equals to bssid (for retrocompatibility)
                      channel: <number>,
                      frequency: <number>, // in MHz
                      signal_level: <number>, // in dB
                      quality: <number>, // same as signal level but in %
                      security: 'WPA WPA2' // format depending on locale for open networks in Windows
                      security_flags: '...' // encryption protocols (format currently depending of the OS)
                      mode: '...' // network mode like Infra (format currently depending of the OS)
                    },
                    ...
                ];
                */
      }
    });
  }
}

export default WifiScanTask;
