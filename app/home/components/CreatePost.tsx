"use client";
import Modal from "../../../components/PostContext";
// import { togglePost } from "@/redux/redux/slices/contextSlice";
// import { RootState } from "@/redux/store";
import { AnimatePresence, motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
const CreatePost = ({ onCloseModal }: { onCloseModal?: any }) => {
  // const isModalOpen = useSelector((state: RootState) => state.createPost.post);
  // const dispatch = useDispatch();
  // const toggleModal = () => dispatch(togglePost());

  return (
    <div
      //  className="min-h-screen z-50 fixed"
      className=""
    >
      {/* Post Button */}
      {/* <div className="p-6 flex justify-end">
        <button
          onClick={toggleModal}
          className="bg-[#1DA1F2] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[#1879D2] transition"
        >
          Create Post
        </button>
      </div> */}

      {/* Modal Section */}
      <AnimatePresence>
        <motion.div
          // onClick={toggleModal}
          // className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <motion.div
            className="bg-gray-950 w-11/12 md:w-1/2 rounded-lg p-6 shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-lg font-semibold">Create a Post</h3>
              <button
                onClick={onCloseModal?.()}
                className="text-gray-500 text-4xl hover:text-red-500"
              >
                &times;
              </button>
            </div>

            <textarea
              rows={5}
              placeholder="What's happening?"
              className="w-full border text-black border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] resize-none"
            ></textarea>

            <div className="mt-4 flex justify-end">
              <button
                onClick={onCloseModal?.()}
                className="bg-gray-300 text-black px-4 py-2 rounded-full font-medium mr-2 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button className="bg-[#1DA1F2] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1879D2] transition">
                Post
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CreatePost;
