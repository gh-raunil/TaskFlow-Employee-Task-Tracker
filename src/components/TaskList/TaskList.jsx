import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";

const TaskList = ({ data, employeeId }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((task, idx) => {
        
        if (task.status === "new") {
          return (
            <NewTask
              key={idx}
              data={task}
              index={idx}
              employeeId={employeeId}
            />
          );
        }

        if (task.status === "active") {
          return (
            <AcceptTask
              key={idx}
              data={task}
              index={idx}
              employeeId={employeeId}
            />
          );
        }

        if (task.status === "completed") {
          return (
            <CompleteTask
              key={idx}
              data={task}
            />
          );
        }

        if (task.status === "failed") {
          return (
            <FaildTask
              key={idx}
              data={task}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
