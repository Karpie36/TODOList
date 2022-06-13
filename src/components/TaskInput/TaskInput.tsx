import React, {ChangeEvent, useCallback} from "react";

interface TaskInputInterface {
    setTaskString: (taskString: string) => void
}

function TaskInput(props: TaskInputInterface) {
    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        console.log('Callback task')
        props.setTaskString(event.target.value);
    }

    return (
        <input type="text" id="toDo" name="toDo" onChange={handleTaskChange}/>
    )
}

export default TaskInput;