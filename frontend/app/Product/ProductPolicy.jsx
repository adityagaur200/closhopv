"use client";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ProductPolicy() {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <>
            <p className="text-gray-700 mt-4">
              Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard.
              The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>

            <div className="flex space-x-8 mt-6">
              <img src="/icons/wash-30.png" alt="30°C Wash" className="w-12" />
              <img src="/icons/do-not-bleach.png" alt="Do Not Bleach" className="w-12" />
              <img src="/icons/iron-low.png" alt="Iron Low" className="w-12" />
            </div>

            <ul className="list-disc pl-5 mt-4 space-y-1 text-gray-700">
              <li>MACHINE WASH AT MAX. TEMP. 30°C - NORMAL PROCESS</li>
              <li>DO NOT BLEACH</li>
              <li>DO NOT TUMBLE DRY</li>
              <li>IRON AT MAX. TEMP. OF 110°C WITHOUT STEAM</li>
              <li>DO NOT DRY CLEAN</li>
            </ul>
          </>
        );

      case "delivery":
        return (
          <div className="text-gray-700 mt-4 space-y-3">
            <p>We aim to dispatch all orders within 1-2 business days.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Standard delivery: 3-5 working days</li>
              <li>Express delivery: 1-2 working days</li>
              <li>Free shipping on orders above ₹999</li>
              <li>You will receive an email with the tracking number once your order is shipped</li>
            </ul>
            <p>
              Please ensure your shipping address is accurate. We are not responsible for delays due to incorrect addresses or unforeseen shipping issues.
            </p>
          </div>
        );

      case "returns":
        return (
          <div className="text-gray-700 mt-4 space-y-3">
            <p>We want you to love your purchase. If you’re not completely satisfied, here’s how returns work:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Returns are accepted within 7 days of delivery</li>
              <li>Items must be unused, unwashed, and with all tags intact</li>
              <li>To initiate a return, contact our support team with your order number</li>
              <li>Refunds will be processed within 5-7 working days after we receive the product</li>
            </ul>
            <p>
              Exchange requests are also accepted within the return window, subject to availability.
              Sale items and innerwear are not eligible for return or exchange.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full px-4 py-10">
      <div className="flex space-x-8 border-b border-gray-300 text-lg font-semibold">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 ${
            activeTab === "description" ? "text-black border-b-2 border-black" : "text-gray-400"
          }`}
        >
          DESCRIPTION
        </button>
        <button
          onClick={() => setActiveTab("delivery")}
          className={`pb-2 ${
            activeTab === "delivery" ? "text-black border-b-2 border-black" : "text-gray-400"
          }`}
        >
          DELIVERY POLICY
        </button>
        <button
          onClick={() => setActiveTab("returns")}
          className={`pb-2 ${
            activeTab === "returns" ? "text-black border-b-2 border-black" : "text-gray-400"
          }`}
        >
          RETURNS & EXCHANGES POLICY
        </button>
      </div>

      {renderContent()}

      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}
