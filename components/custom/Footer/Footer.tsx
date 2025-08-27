import Bottomlinks from "./Bottomlinks";
import Midlinks from "./Midlinks";
import Toptext from "./Toptext";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/99">
      <div className=" mx-auto px-8 py-20">
        <Toptext />
        <Midlinks />
        <Bottomlinks />
      </div>
    </footer>
  );
}
