import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import backgroundImage from "../../assets/images/faq.png"; // Ensure the correct path
import SideScroll from "../Marquee/SideScroll";

const faqData = [
  { question: "WHAT IS X REPUBLIK?", answer: "X Republik is a festival that brings together creativity, music, and culture.", color: "bg-red-600" },
  { question: "WHEN IS X REPUBLIK HAPPENING?", answer: "X Republik is happening on [Insert Date Here].", color: "bg-yellow-400 text-black" },
  { question: "WHO ARE THE HOSTS OF X REPUBLIK?", answer: "The hosts of X Republik are [Insert Hosts Here].", color: "bg-black" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="w-full min-h-screen  flex flex-col items-center justify-center px-4 sm:px-6 py-16 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SideScroll />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* FAQ Content */}
      <div className="relative faq-section z-10 w-full max-w-lg sm:max-w-2xl">
        {/* FAQ Header */}
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white mb-8 text-center">FAQ</h2>

        {/* FAQ Items */}
        <div className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center px-4 sm:px-6 py-5 sm:py-6 font-bold uppercase text-base sm:text-lg ${faq.color}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown size={24} className={`transition-transform ease-in-out duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 py-4 px-4 sm:px-6 bg-white text-black text-sm sm:text-base" : "max-h-0"}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
