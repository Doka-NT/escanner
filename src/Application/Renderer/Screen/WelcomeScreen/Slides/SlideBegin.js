import { CarouselItem, Icon } from 'react-onsenui';
import NextButton from '../Components/NextButton';

export default function SlideBegin() {
  return (
    <CarouselItem>
      <div className="slide slide-1">
        <div className="title">escanner</div>
        <div className="content">
          <div className="row">
            <Icon className="icon" icon="fa-tasks" />
            <span className="icon-description">Watch through your last viewed JIRA issues</span>
          </div>
          <div className="row">
            <Icon className="icon" icon="fa-mouse-pointer" />
            <span className="icon-description">Track time in 1-2 clicks. Optionally provide a comment</span>
          </div>
          <div className="row">
            <Icon className="icon" icon="fa-clock" />
            <span className="icon-description">Schedule notifications to keep worklog actual</span>
          </div>
        </div>
        <div className="buttons">
          <NextButton text="Start" />
        </div>
      </div>
    </CarouselItem>
  );
}
