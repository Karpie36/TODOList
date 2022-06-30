import React from "react";
import "./Task.scss";

interface TaskProps {
    index: number,
    description: string,
    date: string,
    time: string
}

function Task(props: TaskProps) {
    return (
    <div className="Task">
        <div>{props.index+1}</div>
        <div>{props.description}</div>
        <div>{props.date}</div>
        <div>{props.time}</div>
        <div className="DeleteTask">Delete</div>
    </div>
    )
}

export default Task;