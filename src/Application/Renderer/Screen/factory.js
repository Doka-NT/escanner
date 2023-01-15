import ScreenDict from './ScreenDict';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

export default function createScreen(screenName) {
  let screen;

  switch (screenName) {
    case ScreenDict.WELCOME:
      screen = <WelcomeScreen />;
      break;
    default:
      screen = <WelcomeScreen />;
  }

  return screen;
}
