import React from "react";
import './Form.scss';
import TaskInput from "../TaskInput/TaskInput";
import DateTimeInput from '../DateTimeInput/DateTimeInput';
import {useTasksContext} from "../App/App";

interface TaskDateAndTime {value: string, min: string}

function Form() {
    const [taskDescription, setTaskDescription] = React.useState('');
    const [taskDateAndTime, setTaskDateAndTime] = React.useState<TaskDateAndTime>({ value: '', min: ''});
    const {tasks, setTasks} = useTasksContext();

    React.useEffect(() => {
        setTaskDescription("");
    }, [tasks]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if(taskDescription) {
            const [taskDate, taskTime] = taskDateAndTime['value'].split('T');
            const task = {
                description: taskDescription,
                date: taskDate,
                time: taskTime
            };
            if( tasks.some(t => JSON.stringify(t) === JSON.stringify(task) ) ) {
                alert("Task has already been created. Don't make duplicates.");
                return -1;
            }
            const newTasksArr = [...tasks, task];
            newTasksArr.sort((t1, t2) => {
                if(t1.date < t2.date) {
                    return -1;
                }
                if(t1.date > t2.date) {
                    return 1;
                }
                if(t1.time < t2.time) {
                    return -1;
                }
                if(t1.time > t2.time) {
                    return 1;
                }
                return 0;
            })
            setTasks(newTasksArr);
        }
    }

    return(
        <form className="TaskForm" onSubmit={handleSubmit}>
            <label htmlFor="toDo">Task to do</label>
            <TaskInput taskString={taskDescription} setTaskString={setTaskDescription}/>
            <DateTimeInput taskDateAndTime={taskDateAndTime} setTaskDateAndTime={setTaskDateAndTime}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;