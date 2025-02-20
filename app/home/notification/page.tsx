"use client";
import React, { useState } from "react";

const Notification = () => {
  const [activeTab, setActiveTab] = useState(0);
  const notification = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Verified",
    },
    {
      id: 2,
      name: "Mentions",
    },
  ];
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 px-12 py-8">Notifications</h2>

      {/* Notifications */}
      <div className="">
        <div className="flex justify-around border-b-[1px] border-[#2f3336]">
          {notification.map((activity, i) => (
            <button
              key={activity.id}
              onClick={() => setActiveTab(i)}
              className={`${
                activeTab === i
                  ? "border-b-[5px] border-blue-500"
                  : "border-b-[5px] border-transparent"
              } cursor-pointer pb-2 rounded-sm`}
            >
              <div className="flex items-center gap-2">
                <p>{activity.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
