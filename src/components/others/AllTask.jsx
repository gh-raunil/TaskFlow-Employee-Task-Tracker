import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  if (!userData) return null;

  return (
    <div
      className="bg-[#1c1c1c] p-5 mt-5 rounded h-70 scroll-smooth"
    >
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 font-extrabold">Employee Name</h2>
        <h3 className="w-1/5 font-extrabold">New</h3>
        <h5 className="w-1/5 font-extrabold">Active</h5>
        <h5 className="w-1/5 font-extrabold">Completed</h5>
        <h5 className="w-1/5 font-extrabold">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto" id="alltask" >

        {userData.map((emp) => {

          const newCount = emp.tasks.filter(
            (task) => task.status === "new"
          ).length;

          const activeCount = emp.tasks.filter(
            (task) => task.status === "active"
          ).length;

          const completedCount = emp.tasks.filter(
            (task) => task.status === "completed"
          ).length;

          const failedCount = emp.tasks.filter(
            (task) => task.status === "failed"
          ).length;

          return (
            <div
              key={emp.id}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 font-bold">
                {emp.firstname}
              </h2>

              <h3 className="w-1/5 font-bold text-blue-400">
                {newCount}
              </h3>

              <h5 className="w-1/5 font-bold text-yellow-300">
                {activeCount}
              </h5>

              <h5 className="w-1/5 font-bold text-emerald-400">
                {completedCount}
              </h5>

              <h5 className="w-1/5 font-bold text-red-400">
                {failedCount}
              </h5>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllTask;
