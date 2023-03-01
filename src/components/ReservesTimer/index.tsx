import React, {useEffect, useState} from 'react';
import moment from "moment/moment";

type ReservesTimerProps = {
    seconds: number,
    setSeconds: (number: number) => void,
}

const ReservesTimer = ({seconds, setSeconds}: ReservesTimerProps) => {
    const [secondsLeft, setSecondsLeft] = useState<number>(seconds);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (secondsLeft <= 0) {
                setSeconds(1);
                setSecondsLeft(1);
                clearInterval(timerInterval);
            }

            setSecondsLeft(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [secondsLeft])

    return (
        <>{moment.utc(1000 * secondsLeft).format('HH:mm:ss')}</>
    );
};

export default ReservesTimer;