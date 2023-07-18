import { useState } from 'react';

function HomeTodo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>+</button>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  );
}

export default HomeTodo;
