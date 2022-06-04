import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormInterface {
    tasksArr: string[],
    setTasksArr: (newTasks: string[]) => void
}

function Form(props: FormInterface) {
    const [task, setTask] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const newTasksArr = [...props.tasksArr, task];
        props.setTasksArr(newTasksArr);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="toDo">Task to do:</label>
            <input type="text" name="toDo" onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default Form;