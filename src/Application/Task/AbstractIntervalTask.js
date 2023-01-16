/**
 * @abstract
 */
class AbstractIntervalTask {
  static __interval

  /**
   * @param {Number} intervalSeconds
   */
  start(intervalSeconds) {
    if (!intervalSeconds) {
      throw new Error('intervalSeconds must be set');
    }

    this.constructor.__interval = setInterval(this._iteration.bind(this), intervalSeconds);
  }

  stop() {
    if (!this.constructor.__interval) {
      return;
    }

    clearInterval(this.constructor.__interval);
    this.constructor.__interval = null;
  }

  restart(intervalSeconds) {
    this.stop();
    this.start(intervalSeconds);
  }

  /**
   * @abstract
   * @protected
   */
  _iteration() {
    throw new Error('You have to implement iteration method');
  }

  isStarted() {
    return !!this.constructor.__interval;
  }
}

export default AbstractIntervalTask;
