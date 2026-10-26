"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activities = [
    {
      id: 0,
      name: "Posts",
    },
    {
      id: 1,
      name: "Replies",
    },
    {
      id: 2,
      name: "Likes",
    },
    {
      id: 3,
      name: "Comments",
    },
    {
      id: 4,
      name: "Highlights",
    },
  ];
  return (
    <div className="border-b-[2px] border-gray-500">
      <div className="py-12 px-8">
        <Image
          src="/images/user.jpg"
          width={150}
          height={150}
          alt="user"
          className="rounded-full my-8"
        />

        <div>
          <h1 className="text-2xl font-bold">Ai World, Remi!</h1>
          <span className="text-gray-500 text-sm">@oluRemiFour</span>

          <div className="py-4">
            <p>I&apos;m an AI developer and a passionate about technology.</p>
            <div className="flex space-x-2 items-center">
              <BsCalendar2Date />
              <p className="py-1">Joined July 2022</p>
            </div>
            <div className="flex gap-2">
              <p>100 following </p>
              <p>1 follower </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <div className="flex justify-between">
          {activities.map((activity, i) => (
            <button
              key={activity.id}
              onClick={() => setActiveTab(i)}
              className={`${
                activeTab === i
                  ? "border-b-[5px] border-blue-500"
                  : "border-b-[5px] border-transparent"
              } cursor-pointer pb-2`}
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

export default Profile;
