import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: uuidv4(), name: newItem }]);
      setNewItem('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-list">
      <h2>Einkaufsliste</h2>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Artikel hinzufügen"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Hinzufügen</button>
      </div>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)}>Entfernen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
