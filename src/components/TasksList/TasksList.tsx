import React from "react";
import './TasksList.scss';

interface TasksListInterface {
    tasks: string[],
    setTasksArr: (newTasks: string[]) => void
}

function TasksList(props: TasksListInterface) {
    function deleteTaskFromList(taskText: string) {
        const tasks = props.tasks;
        const taskToDeleteIndex = tasks.indexOf(taskText);
        console.log(taskToDeleteIndex);
        const newTaskArr = tasks.filter((task, index) => {
            return index !== taskToDeleteIndex
        });
        props.setTasksArr(newTaskArr);
    }

    function handleDeleteTask(event: React.MouseEvent<Element, MouseEvent>) {
        event.preventDefault();
        const targetElement = event.target as HTMLElement;
        if(targetElement.classList.contains("DeleteTask")) {
            let taskText = targetElement.parentElement?.innerText;
            taskText = taskText && taskText.replace(' Delete', '');
            deleteTaskFromList(taskText as string);
        }
    }

    return (
        <ul className="TasksList" onClick={handleDeleteTask}>
            {
                props.tasks.map(task => { return <li className="Task">{task} <span className="DeleteTask">Delete</span></li> })
            }
        </ul>
    )
}

export default TasksList;