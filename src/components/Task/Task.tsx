import React from "react";
import "./Task.scss";


interface TaskProps {
    index: number,
    description: string,
    date: string,
    time: string,
    handleDelete: React.MouseEventHandler
}

function Task(props: TaskProps) {
    return (
    <div className="Task">
        <div>{props.index}</div>
        <div>{props.description}</div>
        <div>{props.date}</div>
        <div>{props.time}</div>
        <div className="DeleteTask" onClick={props.handleDelete}>Delete</div>
    </div>
    )
}

export default Task;