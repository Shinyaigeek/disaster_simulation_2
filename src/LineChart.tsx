import * as React from "react";
import { Line } from "react-chartjs-2";

interface Props {
  label: string;
  dot: number[][];
  lineColor: string;
  dotColor: string;
}

const getLabels = (from: number, to: number) => {
  return new Array(to - from + 1).fill(0).map((_, idx) => {
    return from + idx === 0 ? "i" : from + idx < 0 ? `i - ${Math.abs(from + idx)}` : `i + ${from + idx}`;
  });
};

export const LineChart = (props: Props) => {
  const [t, setT] = React.useState(0);
  return (
    <div>
      <h2>{props.label}</h2>
      <Line
        data={{
          labels: getLabels(-10, 11),
          datasets: [
            {
              label: "オイラー陽解法",
              data: props.dot[t * 5],
              backgroundColor: props.dotColor,
              borderColor: props.lineColor,
              borderWidth: 2,
              fill: false,
            },
          ],
        }}
      />

      <div className="form">
        <input
          type="range"
          max="1"
          min="0"
          step="0.2"
          value={t}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v >= 0 && v <= 1) {
              setT(v);
            }
          }}
        />
        <div>t: {t}, min:0 ~ max:1.0</div>
      </div>
    </div>
  );
};
