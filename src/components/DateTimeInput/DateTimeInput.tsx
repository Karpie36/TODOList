import React, {ChangeEvent, useEffect, useState} from "react";

interface DateTimeInputInterface {
    taskDateAndTime: string,
    setTaskDateAndTime: (newTaskDate: string) => void
}

function DateTimeInput(props: DateTimeInputInterface) {
    const [minDateTime, setMinDateTime] = useState(getDateAndTime());

    function getRemainingSecondsToMinute() {
        const date = new Date();
        return (60 - date.getSeconds() + 1);
    }

    useEffect(() => {
        props.setTaskDateAndTime(getDateAndTime());

        const minDateTimeInterval = setInterval(() => {
            setMinDateTime(getDateAndTime());
        }, getRemainingSecondsToMinute() * 1000);

        return () => {
            clearInterval(minDateTimeInterval);
        }
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
        }T${
            hours >= 10
            ? hours
            : [0,hours].join('')
        }:${
            minutes >= 10
            ? minutes
            : [0,minutes].join('')
        }`;
        console.log(dateTimeString);
        
        return dateTimeString;
    }

    return (
        <input id="taskDate" type="datetime-local" name="taskDate" value={props.taskDateAndTime} min={minDateTime} onChange={handleDateChange}/>
    )
}

export default DateTimeInput;