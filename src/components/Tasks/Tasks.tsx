import React from "react";
import './Tasks.scss';

function Tasks(props: {tasks: string[]}) {
    return (
        <ul>
            {
                props.tasks.map(task => { return <li className="Task">{task}</li> })
            }
        </ul>
    )
}

export default Tasks;