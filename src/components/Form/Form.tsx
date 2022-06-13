import React, { FormEvent, useState } from "react";
import './Form.scss';
import TaskInput from "../TaskInput/TaskInput";
import DateTimeInput from '../DateTimeInput/DateTimeInput';

interface FormInterface {
    tasksArr: string[],
    setTasksArr: (newTasks: string[]) => void
}

function Form(props: FormInterface) {
    const [taskString, setTaskString] = useState('');
    const [taskDateAndTime, setTaskDateAndTime] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const taskArr = props.tasksArr;
        if(taskString) {
            const [taskDate, taskTime] = taskDateAndTime.split('T');
            const task = [taskString, taskDate, taskTime].join(' ');
            if(taskArr.includes(task)) {
                 alert("Task has already been created. Don't make duplicates.");
                 return -1;
            }
            const newTasksArr = [...props.tasksArr, task];
            props.setTasksArr(newTasksArr);
        }
    }

    return(
        <form className="TaskForm" onSubmit={handleSubmit}>
            <label htmlFor="toDo">Task to do</label>
            <TaskInput setTaskString={setTaskString}/>
            <DateTimeInput setTaskDateAndTime={setTaskDateAndTime}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;