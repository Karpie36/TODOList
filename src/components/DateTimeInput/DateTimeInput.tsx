import React, {ChangeEvent, useEffect} from "react";

interface DateTimeInputInterface {
    setTaskDateAndTime: (newTaskDate: string) => void
}

function DateTimeInput(props: DateTimeInputInterface) {
    useEffect(() => {
        props.setTaskDateAndTime(getDateAndTime());
    }, []);

    function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
        props.setTaskDateAndTime(event.target.value);
    }

    function getDateAndTime() {
        const date = new Date();

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const dateTimeString = `${year}-${
            month >= 10 
            ? month 
            : [0,month].join('')
        }-${
            day >= 10 
            ? day 
            : [0,day].join('')
        }T${hours}:${minutes}`;
        console.log(dateTimeString);
        
        return dateTimeString;
    }

    return (
        <input id="taskDate" type="datetime-local" name="taskDate" value={getDateAndTime()} min={getDateAndTime()} onChange={handleDateChange}/>
    )
}

export default DateTimeInput;