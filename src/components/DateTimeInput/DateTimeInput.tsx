import React, {ChangeEvent, useEffect, useMemo} from "react";

interface DateTimeInputInterface {
    taskDateAndTime: string,
    setTaskDateAndTime: (newTaskDate: string) => void
}

function DateTimeInput(props: DateTimeInputInterface) {
    useEffect(() => {
        props.setTaskDateAndTime(dateAndTimeNow);
    }, []);

    function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
        props.setTaskDateAndTime(event.target.value);
    }

    const dateAndTimeNow = useMemo(function getDateAndTime() {
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
    }, [])

    return (
        <input id="taskDate" type="datetime-local" name="taskDate" value={props.taskDateAndTime} min={dateAndTimeNow} onChange={handleDateChange}/>
    )
}

export default DateTimeInput;