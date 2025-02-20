const Home = () => {
  return (
    <main className="flex-grow p-4 border-l border-r border-[#333]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Home</h1>
      </div>
      <div className="space-y-6">
        {/* Sample Post */}
        <div className="bg-[#252525] p-4 rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#444]"></div>
            <div>
              <h2 className="font-bold">User Name</h2>
              <p className="text-sm text-gray-400">@username · 1h</p>
              <p className="mt-2 text-sm">
                This is a sample post in the feed. Posts will appear here
                dynamically.
              </p>
            </div>
          </div>
        </div>
        {/* Repeat Sample Posts as Needed */}
        <div className="bg-[#252525] p-4 rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#444]"></div>
            <div>
              <h2 className="font-bold">Another User</h2>
              <p className="text-sm text-gray-400">@anotheruser · 2h</p>
              <p className="mt-2 text-sm">
                Here is another example of a post within the feed layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
