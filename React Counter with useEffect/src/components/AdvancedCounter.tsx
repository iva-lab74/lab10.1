import { useState, useEffect } from "react";

export default function AdvancedCounter() {
    //destructuring main count
    const [count, setCount] = useState(0);
    //previous/history/ an array of numbers
    const [history, setHistory] = useState<number[]>([]);
    //steps
    const [step, setStep] = useState(1);

    //increasing
    const forIncrement = () => {
        const newCount = count + step;
        setCount(newCount);
        setHistory(prev => [...prev, newCount]);
    };

    //decreasing
    const forDecrement = () => {
        const newCount = count - step;
        setCount(newCount);
        setHistory(prev => [...prev, newCount]);
    };

    //always create new array for react. react will re-render
    return(
        <div>
            <h1>Advanced Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={forIncrement}>+{step}</button>
            <button onClick={forDecrement}>-{step}</button>
            <p>History: {history.join(",")} </p>
            <p>Steps: {step}</p>
        </div>
    );
}