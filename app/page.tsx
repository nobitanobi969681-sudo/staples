import Appleslider from "@/components/custom/Appleslider/Appleslider";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Movingcards from "@/components/custom/Movingcards/Movingcards";
import Servicegrid from "@/components/custom/Servicegrid/Servicegrid";

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <Appleslider />
      <div className="mt-7">
        <Servicegrid />
      </div>
      <Movingcards />
    </>
  );
}
