import React, {useState} from 'react';
import './App.scss';
import Form from '../Form/Form';
import TasksList from '../TasksList/TasksList';

function App() {
  const [tasksArr, setTasksArr] = useState<string[]>([]);

  return (
    <div className="App">
      <Form tasksArr={tasksArr} setTasksArr={setTasksArr}></Form>
      <TasksList tasks={tasksArr}></TasksList>
    </div>
  );
}

export default App;
