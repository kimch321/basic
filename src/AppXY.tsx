import React, {useState} from 'react';
import './AppXY.css';

type position = {
    x:number;
    y:number;
}
export default function AppXY() {
    const [position, setPosition] = useState<position>({x:0, y:0})
  return (
    <div className='container' onPointerMove={(e) => {
        console.log(e.clientX, e.clientY)
        setPosition((prev) => ({ ...prev, x:e.clientX }))
    }
    }>
      <div className='pointer' style={{transform:`translate(${position.x}px,${position.y}px)`}} />
    </div>
  );
}
