"use client";
import React, { useState } from "react";

interface ChatProps {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}
const Message = () => {
  const [selectedChat, setSelectedChat] = useState<ChatProps | null>(null);

  const chats = [
    { id: 1, name: "Alice", lastMessage: "Hey! How are you?", time: "2:15 PM" },
    {
      id: 2,
      name: "Bob",
      lastMessage: "Looking forward to tomorrow.",
      time: "1:45 PM",
    },
    {
      id: 3,
      name: "Charlie",
      lastMessage: "Let me know when you're free.",
      time: "12:30 PM",
    },
    { id: 4, name: "Diana", lastMessage: "See you soon!", time: "11:15 AM" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-[35%] border-r border-[#2f3336] p-8">
        <h2 className="text-2xl font-bold mb-4">Messages</h2>
        <div>
          <input
            type="search"
            className="px-4 py-2 rounded-full w-full border-[#2f3336] outline-none bg-transparent border mb-6 mt-2"
            placeholder="search for messages"
          />
        </div>
        <div className="space-y-4">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 rounded-lg cursor-pointer bg-[#151515] ${
                selectedChat?.id === chat.id
                  ? "bg-[#1da0f237] text-white"
                  : "hover:bg-opacity-10"
              }`}
            >
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-sm text-gray-500">{chat.lastMessage}</p>
              <span className="text-xs text-gray-400">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 p-6 flex flex-col">
        {selectedChat ? (
          <div className="flex flex-col h-full">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-xl font-bold">{selectedChat.name}</h3>
              <p className="text-sm text-gray-500">Active now</p>
            </div>

            <div className="flex-grow overflow-y-auto bg-[#151515] p-4 rounded-lg">
              <div className="text-center text-gray-400">
                <p>No messages yet. Start the conversation!</p>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full border border-gray-300 bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a chat to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
