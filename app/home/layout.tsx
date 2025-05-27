"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Trends from "../../components/Trends";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import CreatePost from "./components/CreatePost";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      return;
    }
  }, [currentPath]);

  console.log(currentPath);

  return (
    <Provider store={store}>
      <div className="min-h-screen  relative   flex justify-between bg-[#1A1A1A] text-white">
        {/* Sidebar Navigation */}
        <Sidebar />
        {/* Feed Section */}
        <div className="flex-1">
          {children}
          {/* <CreatePost /> */}
        </div>
        {/* Trends/Widgets Section */}
        {currentPath === "/home/message" ? "" : <Trends />}
      </div>
    </Provider>
  );
};

export default Layout;
