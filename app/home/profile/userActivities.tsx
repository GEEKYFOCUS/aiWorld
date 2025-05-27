"use client";
import { useEffect, useState } from "react";
import { getCurrentUserPost } from "@/lib/data-service";
import AllUserPost from "@/components/Posts";
import { User } from "./userProfile";

export default function UserActivities({ user }: { user: User }) {
  console.log(user);
  const activities = [
    { id: 0, name: "Posts" },
    { id: 1, name: "Replies" },
    { id: 2, name: "Likes" },
    { id: 3, name: "Comments" },
    { id: 4, name: "Highlights" },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [posts, setPost] = useState<Array<any> | null>([]);
  const [isPostLoading, setIsPostLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsPostLoading(true);
      try {
        const data = await getCurrentUserPost();
        setPost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsPostLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);
  // Function to render content based on activeTab
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 0:
        return <AllUserPost user={user} />;
      case 1:
        return <div>💬 Showing Replies...</div>;
      case 2:
        return <div>❤️ Showing Likes...</div>;
      case 3:
        return <div>📝 Showing Comments...</div>;
      case 4:
        return <div>🌟 Showing Highlights...</div>;
      default:
        return <div>❓ Unknown Tab</div>;
    }
  };

  return (
    <div className="space-y-4 ">
      {/* Tab Buttons */}
      <div className="flex justify-between border-b-[2px] border-gray-500">
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
      <div className="p-4 border rounded-lg">{renderActiveTabContent()}</div>
    </div>
  );
}
