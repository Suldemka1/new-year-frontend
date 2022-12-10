import React, {useEffect, useState} from 'react';

const Countdown = () => {
    const [state, setState] = useState(1672505999 - Math.floor(Date.now() / 1000));
    const [days, setDays] = useState()
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setState((left) => left - 1)

            const daysLeft = Math.floor(state / 86400)
            const hoursLeft = Math.floor((state % 86400) / 3600)
            const minutesLeft = Math.floor(((state % 86400) % 3600 ) / 60)
            const secondsLeft = Math.floor(((state % 86400) % 3600 ) % 60)

            setDays(daysLeft)
            setHours(hoursLeft)
            setMinutes(minutesLeft)
            setSeconds(secondsLeft)

        }, 1000)

        return () => clearInterval(timer)
    }, [seconds]);

    return (
        <div className="container">
            <div className="countdown">
                <div className="countdown__text">
                    <h2>До нового года осталось</h2>
                </div>
                <div className="countdown__timer">
                      <span className="countdown__timer-item">
                        <h2>{days}</h2>
                      </span>
                                    <h2>:</h2>
                                    <span className="countdown__timer-item">
                        <h2>{hours}</h2>
                      </span>
                                    <h2>:</h2>
                                    <span className="countdown__timer-item">
                        <h2>{minutes}</h2>
                      </span>
                                    <h2>:</h2>
                                    <span className="countdown__timer-item">
                        <h2>{seconds}</h2>
                      </span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
