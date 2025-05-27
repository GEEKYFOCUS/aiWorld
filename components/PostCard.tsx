import Image from "next/image";
import { useCallback, useOptimistic, useState } from "react";
import { Heart, MessageCircleMore, Repeat } from "lucide-react";
import {
  likePost,
  unlikePost,
  repost as repostAPost,
  unRepost,
} from "@/lib/data-service";
import { User } from "@/app/home/profile/userProfile";

const PostCard = ({ post, user }: { post: any; user: User }) => {
  const [like, setLike] = useState<boolean>(function () {
    if (post?.likes?.includes(user.UserId)) {
      return true;
    }
    return false;
  });
  const [likesCount, setLikesCount] = useState<number>(function () {
    return post?.likes?.length || 0;
  });

  console.log(post.reposts);
  const [repost, setRepost] = useState<boolean>(function () {
    if (post?.reposts?.includes(user.UserId)) {
      return true;
    }
    return false;
  });
  const [repostsCount, setRepostsCount] = useState<number>(function () {
    return post?.reposts?.length || 0;
  });

  const [optimisticLike, toggleOptimisticLike] = useOptimistic(
    like,
    (prev) => !prev
  );
  const [optimisticRepost, toggleOptimisticRepost] = useOptimistic(
    repost,
    (isRepost) => !isRepost
  );
  // do not wrap your function inside a callback if the function is in the same component,
  //  I'm doing so here cause the logic is computabtionally expensive

  const handleLikeChanges = useCallback(async () => {
    // this optimistically update the UI
    toggleOptimisticLike(!optimisticLike);

    try {
      const data = optimisticLike
        ? await unlikePost(post.post_id)
        : await likePost(post.post_id);

      if (data.message) {
        // this tooggle like state
        setLike((prev: boolean) => !prev);
        // ppdate count separately using the optimisticLike
        setLikesCount((prevCount: number) =>
          optimisticLike ? Math.max(prevCount - 1, 0) : prevCount + 1
        );
      } else {
        // Revert optimistic update if API fails
        toggleOptimisticLike(!optimisticLike);
      }
    } catch (error) {
      console.error("Error updating like status:", error);
      toggleOptimisticLike(!optimisticLike);
    }
  }, [optimisticLike, post.post_id, toggleOptimisticLike]);

  const handleRepostChanges = useCallback(async () => {
    // this optimistically update the UI
    toggleOptimisticRepost(!optimisticRepost);

    try {
      const data = optimisticRepost
        ? await unRepost(post.post_id)
        : await repostAPost(post.post_id);

      if (data.message) {
        // this tooggle like state
        setRepost((prev: boolean) => !prev);
        // ppdate count separately using the optimisticLike
        setRepostsCount((prevCount: number) =>
          optimisticRepost ? Math.max(prevCount - 1, 0) : prevCount + 1
        );
      } else {
        // Revert optimistic update if API fails
        toggleOptimisticRepost(!optimisticRepost);
      }
    } catch (error) {
      console.error("Error updating like status:", error);

      toggleOptimisticRepost(!optimisticRepost);
    }
  }, [optimisticRepost, post.post_id, toggleOptimisticRepost]);

  return (
    <div className="border-b last:border-b-0 text-white border-gray-300 p-4 cursor-pointer transition">
      <div className="flex items-start gap-3">
        <Image
          src={post?.picture}
          alt="User avatar"
          width={48}
          height={48}
          quality={100}
          className="w-12 h-12 rounded-full object-contain"
        />

        <div className="flex-1">
          <h4 className="font-bold">{post.name}</h4>
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
          <p className="mt-2 text-gray-100">{post.content}</p>

          {post?.images?.length > 0 && (
            // <div className="grid grid-cols-2 gap-2 mt-2">
            //   {post.images.map((img: string, index: number) => (
            //     <Image
            //       key={index}
            //       src={img}
            //       alt="Post"
            //       width={100}
            //       height={100}
            //       quality={100}
            //       className="!rounded-lg w-full h-full object-contain sm:object-cover"
            //     />
            //   ))}
            // </div>
            // unoptimized={
            //   true
            //   }
            <div className="grid grid-cols-2 gap-2 mt-2">
              {post.images.map((img: string, index: number) => (
                <div key={index} className="relative w-full h-48">
                  <Image
                    src={img}
                    alt="Post"
                    fill
                    quality={100}
                    className="!rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div
            className={`flex items-center gap-4 mt-3 ${"text-gray-600"} text-sm`}
          >
            <button
              onClick={handleLikeChanges}
              className={` ${optimisticLike ? "liked" : ""}
              hover:text-red-700 like-button outline-none  flex items-center`}
            >
              <span className="flex items-start">
                <Heart
                  className={` ${optimisticLike ? "heart-icon" : ""} ${
                    optimisticLike ? "text-red-600" : ""
                  }   w-5 h-4`}
                />
              </span>
              <span className="text-gray-600"> {likesCount}</span>
            </button>
            <button className="hover:text-red-600 flex items-center">
              <span>
                {" "}
                <MessageCircleMore className={`  w-5 h-4`} />
              </span>
              <span>0 </span>
            </button>
            <button
              onClick={handleRepostChanges}
              className="hover:text-red-700 flex items-center"
            >
              <span>
                <Repeat
                  className={` ${
                    optimisticRepost ? "fill-red-500 text-red-600" : "fill-none"
                  }  outline-4  w-5 h-4`}
                />
              </span>
              <span>{repostsCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg> */
}
