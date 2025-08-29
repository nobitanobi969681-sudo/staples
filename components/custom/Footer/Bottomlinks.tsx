import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Bottomlinks = () => {
  return (
    <div className="tracking-wider text-gray-900 uppercase flex flex-col items-center justify-between gap-4 text-sm  dark:text-white md:flex-row">
      <p className="">
        © {new Date().getFullYear()} ATM. All rights reserved.
      </p>
      <div className="flex gap-4 text-sm tracking-wider text-gray-900 dark:text-white ">
        PRIVACY POLICY | T&C | Legal
      </div>
    </div>
  );
};

function SocialLink({
  href,
  icon,
  label,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors",
        className
      )}
    >
      {icon}
    </Link>
  );
}

export default Bottomlinks;
