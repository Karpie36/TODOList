import React, { FormEvent, useState } from "react";
import './Form.scss';
import TaskInput from "../TaskInput/TaskInput";
import DateTimeInput from '../DateTimeInput/DateTimeInput';

interface FormInterface {
    tasksArr: (string[])[],
    setTasksArr: (newTasks: (string[])[]) => void
}

interface TaskDateAndTime {value: string, min: string}

function Form(props: FormInterface) {
    const [taskString, setTaskString] = useState('');
    const [taskDateAndTime, setTaskDateAndTime] = useState<TaskDateAndTime>({ value: '', min: ''});

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const taskArr = props.tasksArr;
        if(taskString) {
            const [taskDate, taskTime] = taskDateAndTime['value'].split('T');
            const taskArr = [taskString, taskDate, taskTime];
            const task = taskArr.join(' ');
            if(taskArr.includes(task)) {
                alert("Task has already been created. Don't make duplicates.");
                return -1;
            }
            const newTasksArr = [...props.tasksArr, taskArr];
            props.setTasksArr(newTasksArr);
        }
    }

    return(
        <form className="TaskForm" onSubmit={handleSubmit}>
            <label htmlFor="toDo">Task to do</label>
            <TaskInput taskString={taskString} setTaskString={setTaskString}/>
            <DateTimeInput taskDateAndTime={taskDateAndTime} setTaskDateAndTime={setTaskDateAndTime}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;