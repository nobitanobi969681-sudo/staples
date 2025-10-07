import Bottomlinks from "./Bottomlinks";
import Midlinks from "./Midlinks";
import Toptext from "./Toptext";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t-[1px] border-gray-600">
      <div className="bg-[rgba(255,255,255,0.96)] dark:bg-[rgba(0,0,0,0.92)]">
        <div className=" mx-auto px-8 xl:px-20 py-20 pb-12 sm:pb-32 sm:py-20 ">
          <Toptext />
          <Midlinks />
          <Bottomlinks />
        </div>
      </div>
      <Image
        className="block sm:hidden w-full"
        src="/footer.png"
        width="1920"
        height="800"
        alt="Footer Image"
      />
    </footer>
  );
}
