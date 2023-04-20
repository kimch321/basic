import React, {useState} from 'react';

type Counter = {
    total:number;
    onClick: () => void;
}

export default function Counter({total, onClick}: Counter) {
    const [count, setCount] = useState(0)

  return (
    <div className="counter">
        <p className="number">{count}<span className="total">/{total}</span></p>
        <button className="button"
        onClick={() => {
            setCount((prev) => prev + 1);
            onClick();
        }
        }>Add +</button>
    </div>
  );
}