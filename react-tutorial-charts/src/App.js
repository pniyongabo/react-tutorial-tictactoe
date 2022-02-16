import { LineChart, XAxis, CartesianGrid, Line, Tooltip } from "recharts";
import Button from '@material-ui/core/Button';

// function App() {
//   const data = [
//     { name: "Page A", uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
//     { name: "Page B", uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
//     { name: "Page C", uv: 280, pv: 1398, amt: 2400, uvError: 40 },
//     { name: "Page D", uv: 200, pv: 9800, amt: 2400, uvError: 20 },
//     { name: "Page E", uv: 278, pv: null, amt: 2400, uvError: 28 },
//     { name: "Page F", uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
//     { name: "Page G", uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
//     { name: "Page H", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
//     { name: "Page I", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
//     { name: "Page J", uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
//   ];

//   const data01 = [
//     { day: "05-01", weather: "sunny" },
//     { day: "05-02", weather: "sunny" },
//     { day: "05-03", weather: "cloudy" },
//     { day: "05-04", weather: "rain" },
//     { day: "05-05", weather: "rain" },
//     { day: "05-06", weather: "cloudy" },
//     { day: "05-07", weather: "cloudy" },
//     { day: "05-08", weather: "sunny" },
//     { day: "05-09", weather: "sunny" },
//   ];
//   return (
//     <LineChart
//       width={400}
//       height={400}
//       data={data01}
//       margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
//     >
//       <XAxis dataKey="name" />
//       <Tooltip />
//       <CartesianGrid stroke="#f5f5f5" />
//       <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
//       <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
//     </LineChart>
//   );
// }

function App() {
  return <Button variant="contained">Hello World</Button>;
  }

export default App;
