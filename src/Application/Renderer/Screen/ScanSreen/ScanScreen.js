import { Button, Page } from 'react-onsenui';
import EventDict from '../../../../Domain/Dictionary/EventDict';
import EventEmitter from '../../../../Domain/EventEmitter';

// import './style.less';

export default function WelcomeScreen() {
  const name = 'Developer';

  const startScan = () => {
    EventEmitter.getInstance().send(EventDict.START_SCAN);
  };

  return (
    <Page className="screen screen__scan">
      <Button onClick={startScan}>Start scan</Button>
    </Page>
  );
}
