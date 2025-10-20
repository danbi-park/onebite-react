import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
        </>
    );
};

export default Counter;