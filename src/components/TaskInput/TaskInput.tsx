import React, {ChangeEvent, useCallback} from "react";

interface TaskInputInterface {
    taskString: string,
    setTaskString: (taskString: string) => void
}

function TaskInput(props: TaskInputInterface) {
    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        props.setTaskString(event.target.value);
    }

    return (
        <input type="text" id="toDo" name="toDo" onChange={handleTaskChange} value={props.taskString}/>
    )
}

export default TaskInput;