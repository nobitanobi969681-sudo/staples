import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconCurrencyRupee,
  IconTruck,
  IconBoxSeam,
  IconHeadset,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Transparent Pricing",
      description:
        "Clear, upfront pricing for every order, ensuring you know exact costs with no hidden charges or surprises.",
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Quick Delivery",
      description:
        "Swift and reliable dispatch across India, ensuring your bulk pulse orders arrive fresh and on time.",
      icon: <IconTruck />,
    },
    {
      title: "5Kg to bulk orders",
      description:
        "Available in multiple packet sizes, designed for retail, wholesale, and private-label business requirements.",
      icon: <IconBoxSeam />,
    },
    {
      title: "End-to-End Support",
      description:
        "From order to delivery, our team ensures a seamless experience, prioritizing quality, and trust.",
      icon: <IconHeadset />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 relative z-10 pb-[-20px] pt-0 sm:py-10 px-0 md:px-8 mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-0 sm:border-l sm:border-r-0 py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) &&
          "border-0 lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-4 sm:px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-base sm:text-lg font-bold mb-2 relative z-10 px-4 sm:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#623607] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 max-w-[100px]">
          {title}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 sm:px-10">
        {description}
      </p>
    </div>
  );
};
