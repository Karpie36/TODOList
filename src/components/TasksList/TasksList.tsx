import React from "react";
import './TasksList.scss';
import Task from "../Task/Task";

interface TasksListInterface {
    tasks: (string[])[],
    setTasksArr: (newTasks: (string[])[]) => void
}

function TasksList(props: TasksListInterface) {
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
                props.tasks.map((task, index) => {
                    return <Task index={index} taskString={task[0]} taskDate={task[1]} taskTime={task[2]}/>
                })
            }
        </div>
    )
}

export default TasksList;