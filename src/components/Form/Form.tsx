import React, { FormEvent, useState } from "react";
import './Form.scss';
import TaskInput from "../TaskInput/TaskInput";
import DateTimeInput from '../DateTimeInput/DateTimeInput';
import {useTasksContext} from "../App/App";

interface TaskDateAndTime {value: string, min: string}

function Form() {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDateAndTime, setTaskDateAndTime] = useState<TaskDateAndTime>({ value: '', min: ''});
    const {tasks, setTasks} = useTasksContext();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if(taskDescription) {
            const [taskDate, taskTime] = taskDateAndTime['value'].split('T');
            const task = {
                description: taskDescription,
                date: taskDate,
                time: taskTime
            };
            if(tasks.includes(task)) {
                alert("Task has already been created. Don't make duplicates.");
                return -1;
            }
            const newTasksArr = [...tasks, task];
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