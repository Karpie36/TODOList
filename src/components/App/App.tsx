import React, {useState} from 'react';
import './App.css';
import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks'

function App() {
  const [tasksArr, setTasksArr] = useState<string[]>([]);

  return (
    <div className="App">
      <Form tasksArr={tasksArr} setTasksArr={setTasksArr}></Form>
      <Tasks tasks={tasksArr}></Tasks>
    </div>
  );
}

export default App;
