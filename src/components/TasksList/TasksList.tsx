import React from "react";
import './TasksList.scss';
import Task from "../Task/Task";
import {useTasksContext} from "../App/App"

function TasksList() {
    const {tasks} = useTasksContext();
    
    // function deleteTaskFromList(taskText: string) {
    //     const tasks = props.tasks;
    //     const taskToDeleteIndex = tasks.indexOf(taskText);
    //     const newTaskArr = tasks.filter((task, index) => {
    //         return index !== taskToDeleteIndex
    //     });
    //     props.setTasksArr(newTaskArr);
    // }

    // function handleDeleteTask(event: React.MouseEvent<Element, MouseEvent>) {
    //     event.preventDefault();
    //     const targetElement = event.target as HTMLElement;
    //     if(targetElement.classList.contains("DeleteTask")) {
    //         let taskText = targetElement.parentElement?.innerText;
    //         taskText = taskText && taskText.replace(' Delete', '');
    //         deleteTaskFromList(taskText as string);
    //     }
    // }

    return (
        <div className="TasksList">
            {
                tasks.map((task, index) => {
                    return <Task index={index} description={task.description} date={task.date} time={task.time}/>
                })
            }
        </div>
    )
}

export default TasksList;