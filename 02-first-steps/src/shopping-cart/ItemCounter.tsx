import { useState } from 'react';

import './ItemCounter.css';

interface Props {
  name: string;
  quantiy?: number;
}

// const myStyles: CSSProperties = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: 10,
//   marginTop: 8,
// };

export const ItemCounter = ({ name, quantiy = 1 }: Props) => {
  const [count, setCount] = useState(quantiy);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleSubtract = () => {
    const newCount = count - 1;
    if (newCount === 0) return;
    setCount(newCount);
  };

  return (
    <section className="item-row">
      <span
        className="item-text"
        style={{ color: count === 1 ? 'red' : 'black' }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
