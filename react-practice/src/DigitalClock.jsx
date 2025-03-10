import React, { useEffect, useState } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function showTime() {
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        const maridian = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;

        return `${hour}:${minute}:${second} ${maridian}`;
    }

    return (
        <div>
            <span>{showTime()}</span>
        </div>
    );
}

export default DigitalClock;
