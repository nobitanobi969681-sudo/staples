export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      desc: "Building fast, scalable, and modern websites.",
    },
    {
      title: "UI/UX Design",
      desc: "Crafting intuitive designs with seamless experiences.",
    },
    {
      title: "SEO Optimization",
      desc: "Improving visibility and driving organic traffic.",
    },
    { title: "Branding", desc: "Creating strong identities that stand out." },
    {
      title: "Digital Marketing",
      desc: "Helping brands grow with targeted campaigns.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex-1 min-w-[280px] max-w-[32%]
                bg-white dark:bg-gray-800 rounded-2xl shadow-md 
                p-6 hover:shadow-lg transition 
                text-gray-900 dark:text-gray-100
              "
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
