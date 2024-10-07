import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyBlueLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-07
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            voluptatibus?
          </p>
        </div>

        <div className="bg-skyBlue rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-07
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            voluptatibus?
          </p>
        </div>

        <div className="bg-yellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-07
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            voluptatibus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
