import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Bottomlinks = () => {
  return (
    <div className="tracking-wider text-gray-900 uppercase flex flex-col items-center justify-between gap-4 text-xs sm:text-sm  dark:text-gray-400 md:flex-row">
      <p className="">
        <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link href="/terms">T&C</Link>
      </p>
      <div className="flex gap-4 text-xs sm:text-sm tracking-wider text-gray-900 dark:text-gray-400 ">
        <Link href="/">Home</Link>
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
