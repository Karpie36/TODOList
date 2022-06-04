import React from "react";

function Tasks(props: {tasks: string[]}) {
    return (
        <ul>
            {
                props.tasks.map(task => { return <li>{task}</li> })
            }
        </ul>
    )
}

export default Tasks;