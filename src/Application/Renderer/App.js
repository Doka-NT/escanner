import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import { useSelector } from 'react-redux';
import './App.less';
import createScreen from './Screen/factory';
import ScreenDict from './Screen/ScreenDict';
import { selectScreenName } from './Store/appSlice';
import { selectIsOnboardingPassed } from './Store/settingsSlice';

export default function App() {

  const screen = createScreen(ScreenDict.SCAN);

  return (
    <div>
      <div className="window-drag-area" />
      {screen}
    </div>
  );
}
