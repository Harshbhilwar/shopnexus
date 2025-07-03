"use client"
import React, { useState } from "react";

const tabs = ["Description", "Additional Information", "Reviews"];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabClass = (tab: string) =>
    `px-4 py-2 text-sm font-medium border border-gray-300 
     ${activeTab === tab ? "bg-white text-black border-b-2 border-black" : "bg-gray-100 text-gray-600"} 
     rounded-t-md cursor-pointer`;

  return (
    <div className="mt-10 left-7">
      {/* Tab Buttons */}
      <div className="flex space-x-2 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={tabClass(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-5 bg-white border border-t-0 border-gray-300 rounded-b-md text-sm text-gray-700">
        {activeTab === "Description" && (
          <div>
            <p>
              In ducumus quod sed eum repellendus ea fugiat. Pariatur et illo
              at iure harum...
            </p>
          </div>
        )}

        {activeTab === "Additional Information" && (
          <div>
            <p>
              Weight: 200g<br />
              Dimensions: 10cm x 5cm x 3cm<br />
              Battery: 5000mAh
            </p>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div>
            <p>★★★★☆ (4/5)</p>
            <p>“Great quality product. Fast shipping!”</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;