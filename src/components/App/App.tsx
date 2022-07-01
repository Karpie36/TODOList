import React from "react";
import "./App.scss";
import Form from "../Form/Form";
import TasksList from "../TasksList/TasksList";

export type TaskType = {
  description: string;
  date: string;
  time: string;
};

type TasksContent = {
  tasks: TaskType[],
  setTasks: (newTasks: TaskType[]) => void
}

const TasksContext = React.createContext<TasksContent>({
  tasks: [],
  setTasks: () => {}
})

export const useTasksContext = () => React.useContext(TasksContext);

function App() {
  const [tasks, setTasks] = React.useState<TaskType[]>([]);

  return (
    <div className="App">
      <TasksContext.Provider value={{tasks, setTasks}}>
        <Form></Form>
        <TasksList></TasksList>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
