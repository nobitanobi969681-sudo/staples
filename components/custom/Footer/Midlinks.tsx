import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";

const Midlinks = () => {
  return (
    <div className=" hidden sm:flex justify-between mb-8 sm:mb-20 flex-col md:flex-row">
      {/* Brand + Newsletter */}
      <div className="space-y-4">
        <Link href="tel:+919815951565" className="flex">
          <ShimmerButton className="shadow-2xl min-w-[220px] mx-auto sm:mx-0">
            <span className="whitespace-pre-wrap text-center text-sm font-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              +91 9815 95 1565
            </span>
          </ShimmerButton>
        </Link>
        <ShimmerButton className="shadow-2xl min-w-[220px] mx-auto sm:mx-0">
          <span className="whitespace-pre-wrap text-center text-sm font-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            contact@atm.online
          </span>
        </ShimmerButton>
        <p className="tracking-wider font-semibold text-sm sm:text-md mb-8 sm:mb-0 min-w-[220px] text-center mt-8 text-black dark:text-white">
          BHOPAL, INDIA 🇮🇳
        </p>
      </div>

      {/* Navigation */}
      <div>
        <ul className="mb-8 sm:mb-0 space-y-4 text-sm text-black dark:text-white tracking-wider uppercase text-center sm:text-left">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#docs">Documentation</Link>
          </li>
          <li>
            <Link href="#integrations">Integrations</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="mb-8 sm:mb-0 space-y-4 text-sm text-black dark:text-white tracking-wider uppercase text-center sm:text-left">
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#careers">Careers</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="max-w-min inline mx-auto sm:mx-0">
        <ul className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 space-y-4 text-sm text-black dark:text-white tracking-wider text-center sm:text-left mx-auto sm:mx-0">
          <li>
            <Link href="#help" className="whitespace-nowrap mx-auto sm:mx-0">
              FACEBOOK
            </Link>
          </li>
          <li>
            <Link href="#terms" className="whitespace-nowrap mx-auto sm:mx-0">
              INSTAGRAM
            </Link>
          </li>
          <li>
            <Link href="#privacy" className="whitespace-nowrap mx-auto sm:mx-0">
              TWITTER
            </Link>
          </li>
          <li>
            <Link href="#status" className="whitespace-nowrap mx-auto sm:mx-0">
              LINKEDIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Midlinks;
