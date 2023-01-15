import ScreenDict from './ScreenDict';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import ScanScreen from './ScanSreen/ScanScreen';

export default function createScreen(screenName) {
  let screen;

  switch (screenName) {
    case ScreenDict.WELCOME:
      screen = <WelcomeScreen />;
      break;
    default:
      screen = <ScanScreen />;
  }

  return screen;
}
