import { DottedMap } from "@/components/ui/dotted-map";

const markers = [
  {
    lat: 28.6139,
    lng: 77.209,
    size: 1,
  }, // New Delhi
];

export default function Component() {
  return (
    <div className="relative md:h-[500px] w-full overflow-hidden">
      <div className="to-background absolute inset-0 bg-radial from-transparent to-70%" />
      <DottedMap markers={markers} />
    </div>
  );
}
