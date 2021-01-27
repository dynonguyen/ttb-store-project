// Note: Nguồn tham khảo Viblo.asia & Stackoverflow

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './index.scss';

function Countdown(props) {
  const [state, setState] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });

  useEffect(() => {
    let isSubscribe = true;
    const interval = setInterval(() => {
      const { timeTillDate, timeFormat } = props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      if (isSubscribe) setState({ days, hours, minutes, seconds });
    }, 1000);
    return () => {
      isSubscribe = false;
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [props]);

  const { days, hours, minutes, seconds } = state;
  const daysRadius = mapNumber(days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  if (!seconds) {
    return null;
  }

  return (
    <div className="countdown-wrapper">
      {days && (
        <div className="countdown-item">
          <SVGCircle radius={daysRadius} />
          {days}
          <span>days</span>
        </div>
      )}
      {hours && (
        <div className="countdown-item">
          <SVGCircle radius={hoursRadius} />
          {hours}
          <span>hours</span>
        </div>
      )}
      {minutes && (
        <div className="countdown-item">
          <SVGCircle radius={minutesRadius} />
          {minutes}
          <span>minutes</span>
        </div>
      )}
      {seconds && (
        <div className="countdown-item">
          <SVGCircle radius={secondsRadius} />
          {seconds}
          <span>seconds</span>
        </div>
      )}
    </div>
  );
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#ddd"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

Countdown.propTypes = {
  timeFormat: PropTypes.any,
  timeTillDate: PropTypes.any,
};

SVGCircle.propTypes = {
  radius: PropTypes.any,
};

export default Countdown;
