import React, { useState, useEffect } from 'react'

function FunctionCounter() {
    const [count, setCount] = useState(0);
    return (
        <div className='col-md-5 col-11 mx-auto text-center'>
            <h1>Functional based counter</h1>
            <button onClick={() => setCount(count - 1)}> - </button>
            <span className='mx-3'>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default FunctionCounter