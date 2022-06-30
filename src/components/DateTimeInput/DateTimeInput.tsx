import React, {ChangeEvent, useEffect} from "react";

type TaskDateAndTime = {value: string, min: string};

type PrevTaskDateAndTime = (state: TaskDateAndTime) => TaskDateAndTime

type DateTimeInputInterface = {
    taskDateAndTime: {value: string, min: string},
    setTaskDateAndTime: (value: PrevTaskDateAndTime) => void,
}

function DateTimeInput(props: DateTimeInputInterface) {

    function getRemainingSecondsToMinute() {
        const date = new Date();
        return (60 - date.getSeconds() + 1);
    }

    useEffect(() => {
        props.setTaskDateAndTime( state => {
            const currentDateAndTime = getDateAndTime();
            return {
                value: currentDateAndTime,
                min: currentDateAndTime
            }
        }
    );

        const minDateTimeInterval = setInterval(() => {
            props.setTaskDateAndTime( state => {
                const currentDateTime = getDateAndTime();
                const dateValueObject = new Date(state.value);
                const currentDateObject = new Date(currentDateTime);
                const dateTimeValue = (dateValueObject.getTime() - currentDateObject.getTime() > 0) ? state.value : currentDateTime;
                return {
                    value: dateTimeValue,
                    min: currentDateTime
                }
            })
        }, getRemainingSecondsToMinute() * 1000);

        return () => {
            clearInterval(minDateTimeInterval);
        }
    }, []);

    function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        event.stopPropagation();
        props.setTaskDateAndTime(state => {
            const dateTimeTargetValue = new Date(event.target.value);
            const dateTimeMin = new Date(state.min);
            const newDateTimeValue = (dateTimeTargetValue.getTime() - dateTimeMin.getTime() > 0) ? event.target.value : state.min;
            return {
                ...state,
                value: newDateTimeValue,
            }
        });
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
        
        return dateTimeString;
    }

    return (
        <input id="taskDate" type="datetime-local" name="taskDate" value={props.taskDateAndTime.value} min={props.taskDateAndTime.min} onChange={handleDateChange}/>
    )
}

export default DateTimeInput;