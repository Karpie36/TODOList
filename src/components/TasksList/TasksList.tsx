import React from "react";
import './TasksList.scss';

function TasksList(props: {tasks: string[]}) {
    return (
        <ul className="TasksList">
            {
                props.tasks.map(task => { return <li className="Task">{task}</li> })
            }
        </ul>
    )
}

export default TasksList;