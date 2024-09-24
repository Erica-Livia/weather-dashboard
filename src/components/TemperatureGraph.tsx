import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Area,
  ReferenceLine,
} from "recharts";

interface TemperatureGraphProps {
  data: { time: string; temp: number }[];
  currentTemp?: number; // Current temperature prop
  location?: string; // Location prop
  lineColor?: string; // prop for line color
  gridColor?: string; // prop for grid color
  lineType?: "monotone" | "linear" | "step" | "basis"; // Type of line
}

const TemperatureGraph: React.FC<TemperatureGraphProps> = ({
  data = [],
  currentTemp,
  location,
  lineColor = "#0072ff", // Default line color
  gridColor = "#e0e0e0", // Default grid color
  lineType = "monotone", // Default line type
}) => {
  if (data.length === 0) {
    return <p>No temperature data available</p>; // Handle empty data
  }

  // Calculates the average temperature for the reference line
  const avgTemp = data.reduce((acc, curr) => acc + curr.temp, 0) / data.length;

  return (
    <div style={{ width: '100%', height: '300px' }}> {/* Ensures a fixed height for ResponsiveContainer */}
      <ResponsiveContainer width="100%" height="100%" aria-label="Temperature Graph">
        <LineChart data={data}>
          <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
          <XAxis dataKey="time">
            <Label value="Time" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Temperature (°C)" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <ReferenceLine y={avgTemp} label="Average" stroke="red" strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="temp"
            stroke={lineColor}
            fill={`url(#colorTemp)`}
            fillOpacity={0.3} // Fill opacity for area
          />
          <Line
            type={lineType} // Dynamic line type
            dataKey="temp"
            stroke={lineColor}
            strokeWidth={2}
            dot={{ r: 4 }} // Customize dot size
            activeDot={{ r: 6 }} // Active dot size
          />
          {currentTemp !== undefined && (
            <ReferenceLine y={currentTemp} label={`Current: ${currentTemp}°C`} stroke="green" strokeDasharray="3 3" />
          )}
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={0.8} />
              <stop offset="100%" stopColor={lineColor} stopOpacity={0.2} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
      {location && <p style={{ textAlign: 'center' }}>Location: {location}</p>}
    </div>
  );
};

export default TemperatureGraph;
