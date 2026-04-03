import { ResponsivePie } from "@nivo/pie";

const data = [
  { id: "Rent", value: 400 },
  { id: "Food", value: 300 },
  { id: "Travel", value: 200 },
];

export default function DonutChart() {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4">
      <div style={{ height: 250 }}>
        <ResponsivePie
          data={data}
          innerRadius={0.7}
          enableArcLabels={false}
          colors={{ scheme: "nivo" }}
        />
      </div>
    </div>
  );
}