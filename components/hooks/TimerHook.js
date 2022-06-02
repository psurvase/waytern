import React, { useEffect, useState, useRef } from "react";

const useExpired = (time)=>{
    const [expired, setExpired] = useState(false);
    const timoutRef = useRef();
    useEffect(()=>{
        timoutRef.current = setTimeout(()=>{
            setExpired(true);
        }, time);
        return ()=>{
            clearTimeout(timoutRef.current);
        }
    },[time]);
    return expired;
}

const useCountDown = (start,timeLaps=1000) => {
    const [counter, setCounter] = useState(start);
    useEffect(() => {
        if (counter === 0) {
            return;
        }
        setTimeout(() => {
            setCounter(counter - 1);
        }, timeLaps);
    }, [counter]);
    return counter;
};

export {useExpired,useCountDown}
