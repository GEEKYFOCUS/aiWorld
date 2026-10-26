"use client";
import { openPost } from "@/redux/redux/slices/contextSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { GrRobot } from "react-icons/gr";
import { MdCircleNotifications } from "react-icons/md";
import { RiHome9Fill, RiSearch2Line } from "react-icons/ri";
import { TbMessage2Filled } from "react-icons/tb";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState("");

  const dispatch = useDispatch();
  const ceatePost = () => dispatch(openPost());

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = (link: string) => currentPath === link;

  const sideBar = [
    {
      name: "Home",
      link: "/home",
      icon: <RiHome9Fill size={26} />,
    },
    {
      name: "Explore",
      link: "/home/explore",
      icon: <RiSearch2Line size={26} />,
    },
    {
      name: "Notifications",
      link: "/home/notification",
      icon: <MdCircleNotifications size={26} />,
    },
    {
      name: "Ai World",
      link: "#",
      icon: <GrRobot size={26} />,
    },
    {
      name: "Messages",
      link: "/home/message",
      icon: <TbMessage2Filled size={26} />,
    },
    {
      name: "Profile",
      link: "/home/profile",
      icon: <FaUser size={26} />,
    },
  ];
  return (
    <aside className="w-1/4 lg:w-1/5 flex-col border-r border-[#2f3336] justify-between bg-[#151515] p-8 hidden md:flex">
      <nav className="space-y-2 py-8">
        {sideBar.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`text-lg font-medium flex space-x-3 items-center ${
              isActive(item.link)
                ? "bg-[#1da0f237] font-semibold rounded-lg"
                : "hover:bg-opacity-10 hover:text-[#1DA1F2]"
            } p-4 rounded-lg w-[90%]`}
          >
            <p>{item.icon}</p>
            <p>{item.name}</p>
          </a>
        ))}
      </nav>
      {/* <section className="bg-white rounded-full py-4 px-2 flex justify-center">
        <Link
          href={"#"}
          className="text-[#0c2f3b] font-semibold text-center text-xl"
        >
          Post
        </Link>
      </section> */}
      <div className="">
        <div className="relative group">
          <button
            onClick={ceatePost}
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  Post
                </span>
                <svg
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-8">
        <Image
          src="/images/user.jpg"
          width={50}
          height={50}
          alt="user"
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold text-white">Remi Four</h4>
          <p className="text-sm text-gray-500">@oluRemiFour</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
