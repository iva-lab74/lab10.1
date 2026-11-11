import { useState, useEffect } from "react";

export default function AdvancedCounter() {
    //destructuring main count
    const [count, setCount] = useState(0);
    //previous/history/ an array of numbers
    const [history, setHistory] = useState<number[]>([]);
    //steps
    const [step, setStep] = useState(1);


    return(
        <div>
            <h1>Advanced Counter</h1>
            <h2>Count: {count}</h2>
            <p>History: {history.length} entries</p>
            <p>Steps: {step}</p>
        </div>
    );
}