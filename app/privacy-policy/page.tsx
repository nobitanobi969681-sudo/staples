import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Privacy Policy
        </h1>
        <div className="text-sm md:text-md text-justify">
          <p className="mb-6 text-gray-700">
            We are deeply committed to protecting your privacy and ensuring the
            security of your personal information. Any data collected through
            our website is used strictly to process orders, improve our
            services, and enhance your overall experience. We take every measure
            to maintain confidentiality and handle your information responsibly.
          </p>

          <p className="mb-6 text-gray-700">
            We do not sell, trade, or share your personal information with third
            parties under any circumstances. Cookies and other tracking
            technologies may be used to optimize website performance and provide
            a personalized browsing experience, but they never compromise your
            privacy.
          </p>

          <p className="mb-6 text-gray-700">
            All customer data is stored securely using industry-standard
            security measures to prevent unauthorized access. You have the right
            to request access to your personal information, correct
            inaccuracies, or ask for data deletion at any time. Our goal is to
            maintain transparency and build trust with all our users and
            clients.
          </p>

          <p className="mb-8 text-gray-700">
            By continuing to use our website, you consent to the collection and
            use of information in accordance with this privacy policy. We
            encourage you to review this policy periodically as we may update it
            to reflect changes in our practices or legal requirements.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Contact Information
        </h2>
        <div className="space-y-2 text-gray-700">
          <div className="text-sm md:text-md leading-loose">
            <p>📞 Phone: +91 9005 7490 57</p>
            <p>📧 Email: jmk111gopal@gmail.com</p>
            <p>📍 Address: Lucknow, UP, India 🇮🇳</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
