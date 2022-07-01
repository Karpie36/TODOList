import React from "react";
import "./Task.scss";
import DeleteIcon from '@mui/icons-material/DeleteForever';

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
        <div className="DeleteTask" onClick={props.handleDelete} >
            <DeleteIcon ></DeleteIcon>
        </div>
        
    </div>
    )
}

export default Task;