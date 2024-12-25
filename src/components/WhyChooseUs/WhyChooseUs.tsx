"use client";

const features = [
  {
    title: "Priority to Security",
    description: "There is no chance of your data being stolen with Spyzie's world class encryption."
  },
  {
    title: "100% Hidden",
    description: "No one can find out you are monitoring their phone."
  },
  {
    title: "Most Popular",
    description: "Countless positive reviews by authority media outlets."
  },
  {
    title: "24/7 Customer Service",
    description: "Spyzie provides 24/7 resolution to problems."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 gradient-bg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 glass-card rounded-3xl">
        <h2 className="section-title pt-16">
          Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 font-semibold">MobiTrack</span> ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-black">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-75"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black pt-4">{feature.title}</h3>
              <p className="text-gray-400 max-w-md text-center px-16 pt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 