import React, { useState, useEffect, useRef } from 'react'

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTime = useRef(0);
    const interval = useRef(null);

    useEffect(()=>{
        if (isRunning){
            interval.current = setInterval(()=>{
                setElapsedTime(new Date() - startTime.current);
            },10);
        }
        
        return ()=>{
            clearInterval(interval.current);
        }
    }, [isRunning]);

    function start(){
        startTime.current = new Date() - elapsedTime
        setIsRunning(true)
    };

    function stop() {
        setIsRunning(false)
    };

    function reset() {
        setIsRunning(false)

        setElapsedTime(0)

    };

    function showTime() {
        const millisecond = Math.floor(elapsedTime % 1000 / 10)
        const second = Math.floor(elapsedTime / 1000 % 60)
        const minute = Math.floor(elapsedTime /( 1000 * 60) % 60)

        return `${padding(minute)}:${padding(second)}:${padding(millisecond)}`

    };
    function padding(x){
        return x<10 ? '0'+x : x;
    };

  return (
    <div>
        
         <span>{showTime()}</span>
         <br />
         <button onClick={start}>start</button>
         <button onClick = {stop}>stop</button>
         <button onClick={reset}>reset</button>

    </div>
  )
}

export default Timer
