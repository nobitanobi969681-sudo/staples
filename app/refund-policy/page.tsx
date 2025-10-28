import React from "react";

const RefundPolicy = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Refund Policy
        </h1>
        <div className="text-sm md:text-md text-justify">
          <p className="mb-6 text-gray-700">
            We strive to ensure complete satisfaction with every purchase made
            through our platform. However, if you are not fully satisfied with
            your order, we offer a fair and transparent refund process.
          </p>

          <p className="mb-6 text-gray-700">
            Refunds are applicable only for valid cases such as damaged,
            defective, or incorrect products received. To initiate a refund,
            customers must contact us within{" "}
            <span className="font-medium">7 days</span> of receiving the order,
            providing proof of purchase and relevant details. Requests made
            beyond this period will not be eligible.
          </p>

          <p className="mb-6 text-gray-700">
            Once your request is reviewed and approved, the refund will be
            processed to your original payment method within
            <span className="font-medium"> 5–10 business days</span>. The actual
            time may vary depending on your bank or payment provider.
          </p>

          <p className="mb-6 text-gray-700">
            Please note that items must be unused, undamaged, and returned in
            their original packaging to qualify for a refund. Shipping charges
            are non-refundable unless the return is due to our error.
          </p>

          <p className="mb-8 text-gray-700">
            We reserve the right to refuse a refund request if it does not meet
            the conditions outlined above. Our aim is to maintain transparency
            and fairness while ensuring a smooth experience for every customer.
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

export default RefundPolicy;
