import { Page } from 'react-onsenui';

import './style.less';

export default function WelcomeScreen() {
  const name = 'Developer';

  return (
    <Page className="screen screen__welcome">
      <h1>
        Hello,
        {name}
      </h1>
    </Page>
  );
}
