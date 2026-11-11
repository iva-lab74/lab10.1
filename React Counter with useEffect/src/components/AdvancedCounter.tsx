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

    //the reset button/ back at zero
    const forReset = () => {
        setCount(0);
        setHistory([]);
    };

    //useEffect/ AutoSaving
    useEffect(() => {
        const autoSave = setTimeout(() => {
            localStorage.setItem("count", String(count));
            console.log("Saved:", count);
        }, 3000);
        return() => clearTimeout(autoSave);
    }, [count]);

    //always create new array for react. react will re-render
    return(
        <div>
            <h1>Advanced Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={forIncrement}>+{step}</button>
            <button onClick={forDecrement}>-{step}</button>
            <button onClick={forReset}>Reset!</button>
            <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
            <p>History: {history.join(",")} </p>
            <p>Steps: {step}</p>
        </div>
    );
}