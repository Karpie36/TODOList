import React from "react";
import "./Task.scss";

interface TaskProps {
    index: number,
    task: string
}

function Task(props: TaskProps) {
    return (
    <div className="Task">
        <div>{props.index+1}</div>
        <div>{props.task}</div>
        <div className="DeleteTask">Delete</div>
    </div>
    )
}

export default Task;