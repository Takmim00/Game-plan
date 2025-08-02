import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we provide a completely free trial of the product, with no need to enter any payment information. You will get 10 free searches using the AI, along with full use of our suite of features.",
    },
    {
      question: "Can I use this product for any sport?",
      answer:
        "Absolutely, regardless of the sport you coach, our AI will be able to provide you with accurate and effective plans and drills.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes! If you’re on our monthly plan and decide you're not getting the value out of our product, you can cancel your subscription at any point. No questions asked, and no hard feelings!",
    },
  ];

  return (
    <div className="py-10 md:py-16 w-11/12 mx-auto" id="faq">
      <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <span className="text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
