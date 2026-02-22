import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, index, employeeId }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateStatus = (newStatus) => {
    const updatedUsers = userData.map((emp) => {
      if (emp.id !== employeeId) return emp;

      const updatedTasks = emp.tasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            status: newStatus, // 🔥 only change status
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
      };
    });

    setUserData(updatedUsers);
    localStorage.setItem("employees", JSON.stringify(updatedUsers));
  };

  return (
    <div className="shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
        {data.title}
      </h2>

      <p className="text-sm mt-2">
        {data.description}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => updateStatus("completed")}
          className="btn bg-green-500 py-1 px-2 text-sm"
        >
          Mark as Completed
        </button>

        <button
          onClick={() => updateStatus("failed")}
          className="btn bg-red-500 py-1 px-2 text-sm"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
