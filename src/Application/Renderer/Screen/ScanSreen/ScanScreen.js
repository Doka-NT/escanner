import { useState } from 'react';
import { Button, Page } from 'react-onsenui';
import EventDict from '../../../../Domain/Dictionary/EventDict';
import EventEmitter from '../../../../Domain/EventEmitter';

// import './style.less';

export default function WelcomeScreen() {
  const name = 'Developer';

  const [isStarted, setIsStarted] = useState(false);

  const startScan = () => {
    setIsStarted(!isStarted);

    if (isStarted) {
      EventEmitter.getInstance().send(EventDict.STOP_SCAN);
    } else {
      EventEmitter.getInstance().send(EventDict.START_SCAN);
    }
  };

  return (
    <Page className="screen screen__scan">
      <Button onClick={startScan}>
        {!isStarted ? 'Start scan' : 'Stop scan'}
      </Button>
    </Page>
  );
}
