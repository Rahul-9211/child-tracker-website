"use client";

const Products = () => {
  const products = [
    {
      name: "Basic Monitoring",
      price: "$9.99",
      billing: "per month",
      description: "Perfect for personal use and small families",
      features: [
        "Real-time location tracking",
        "App usage monitoring",
        "Call & SMS logs",
        "Basic reports",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$29.99",
      billing: "per month",
      description: "Ideal for businesses and advanced users",
      features: [
        "Everything in Basic",
        "Advanced activity tracking",
        "Geo-fencing alerts",
        "Priority support",
        "Custom dashboard",
        "Data export"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "contact sales",
      description: "For organizations requiring complete control",
      features: [
        "Everything in Professional",
        "Custom integration",
        "Advanced analytics",
        "24/7 phone support",
        "SLA guarantee",
        "Dedicated account manager"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.2] dark:bg-grid-white/[0.05]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff,rgba(255,255,255,0))] dark:bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your monitoring needs. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border ${
                product.highlighted
                  ? 'border-black dark:border-white shadow-lg scale-105'
                  : 'border-gray-200 dark:border-gray-800'
              } bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl`}
            >
              {product.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {product.name}
                </h3>
                <div className="flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-bold text-black dark:text-white">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    /{product.billing}
                  </span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                  {product.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full text-sm font-medium transition-colors duration-200 ${
                  product.highlighted
                    ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                    : 'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {product.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-20">
          <h3 className="text-2xl font-bold text-black dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How does billing work?",
                a: "We offer monthly and annual billing options. Annual plans come with a 20% discount."
              },
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all plans come with a 14-day free trial. No credit card required."
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-lg font-semibold text-black dark:text-white">
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;