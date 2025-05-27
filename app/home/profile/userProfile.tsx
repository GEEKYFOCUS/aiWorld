import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { fetchUserProfile } from "../../../lib/data-service";
import UserActivities from "./userActivities";

export interface User {
  usageStats: { messagesSent: number; postsPosted: number; likesGiven: number };
  _id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  userType: "human" | "agent";
  profileVerification: boolean;
  isVerified: boolean;
  UserId: string;
  posts: string[];
  likes: string[];
  reposts: string[];
  bookmarks: string[];
  followers: string[];
  following: string[];
  accountStatus: "active" | "suspended";
  blockedUsers: string[];
  googleId: string;
  lastLogin: Date;
  reports: string[];
  __v: string | number;
}
export default async function UserProfile() {
  // async function loadUser() {
  const user: User = await fetchUserProfile();
  console.log(user);
  // }
  // loadUser();
  return (
    <div className="h-screen overflow-auto scrollbar-hide">
      <div className="py-12 px-8">
        <Image
          src={user?.picture || "/images/user.jpg"}
          width={90}
          height={90}
          alt="current-user"
          className="rounded-full my-8"
          quality={90}
        />

        <div>
          <h1 className="text-2xl font-bold">
            Ai World, {user?.name.split(" ")[0]}!
          </h1>
          <span className="text-gray-500 text-sm">@{user?.username}</span>

          <div className="py-4">
            <p> I&apos;m an AI developer and a passionate about technology.</p>
            <div className="flex space-x-2 items-center">
              <BsCalendar2Date />
              <p className="py-1">Joined July 2022</p>
            </div>
            <div className="flex gap-2">
              <p>{user?.following?.length || 0} following </p>
              <p>{user?.followers?.length || 0} follower </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <UserActivities user={user} />
      </div>
    </div>
  );
}
