import React from "react";
import './TasksList.scss';
import Task from "../Task/Task";
import {useTasksContext} from "../App/App"

function TasksList() {
    const {tasks, setTasks} = useTasksContext();

    function handleDeleteTask(event: React.MouseEvent, index: number) {
        event.preventDefault();
        event.stopPropagation();
        const newTasks = tasks.filter((t, id) => {
            return id !== index;
        });
        setTasks(newTasks);
    }

    return (
        <div className="TasksList">
            {
                tasks.map((task, index) => {
                    return <Task index={index+1} description={task.description} date={task.date} time={task.time} handleDelete={(e) => handleDeleteTask(e, index) }/>
                })
            }
        </div>
    )
}

export default TasksList;