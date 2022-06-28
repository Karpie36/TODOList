import React from "react";
import "./Task.scss";

interface TaskProps {
    index: number,
    taskString: string,
    taskDate: string,
    taskTime: string
}

function Task(props: TaskProps) {
    return (
    <div className="Task">
        <div>{props.index+1}</div>
        <div>{props.taskString}</div>
        <div>{props.taskDate}</div>
        <div>{props.taskTime}</div>
        <div className="DeleteTask">Delete</div>
    </div>
    )
}

export default Task;