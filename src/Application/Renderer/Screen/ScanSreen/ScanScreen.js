import { useState } from 'react';
import { Button, Page } from 'react-onsenui';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

import EventDict from '../../../../Domain/Dictionary/EventDict';
import EventEmitter from '../../../../Domain/EventEmitter';

// import './style.less';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 100),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },

    {
      fill: true,
      label: 'Dataset 3',
      data: labels.map(() => Math.random() * 100),
      borderColor: 'rgb(255, 162, 235)',
      backgroundColor: 'rgba(255, 162, 235, 0.5)',
    },
  ],
};

export default function WelcomeScreen() {
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

      <Line options={options} data={data} />
    </Page>
  );
}
