import { node } from 'prop-types';

const nodeWifi = require('node-wifi');

nodeWifi.init({
  iface: null, // network interface, choose a random wifi interface if set to null
});

export default class WiFiFactory {
  static nodeWifi;

  static __instance;

  /**
   * @returns {WiFiFactory}
   */
  static getInstance() {
    if (!WiFiFactory.__instance) {
      WiFiFactory.__instance = new WiFiFactory();
    }

    return WiFiFactory.__instance;
  }

  constructor() {
    this.nodeWifi = nodeWifi;
  }

  /**
   * @returns {node-wifi}
   */
  getNodeWifi() {
    return this.nodeWifi;
  }
}
