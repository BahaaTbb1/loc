import React from 'react';
import { Container, Circle, FilledCircle, Text } from './CircularProgressBar.styles';

interface ICircularProgressBarProps {
  progress: number;
  label?: string;
  width?: number;
}

const CircularProgressBar: React.FC<ICircularProgressBarProps> = ({
  progress,
  label = 'Progress Bar',
  width = 300
}) => {
  const strokeWidth = 8;
  const radius = 100 / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Container>
      <svg
        aria-label={label}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        height={width}
        role="progressbar"
        width={width}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />

        <FilledCircle
          cx="50"
          cy="50"
          data-testid="progress-bar-bar"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
        />
      </svg>

      <Text data-testid="progress-bar-text">{progress}</Text>
    </Container>
  );
};

export default CircularProgressBar;
