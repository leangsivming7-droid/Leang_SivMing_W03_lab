import './App.css'
import { useState } from "react";

function TodoItem({ text, onRemove }) {
  return (
    <li>
      {text} <button onClick={onRemove}>Delete</button>
    </li>
  );
}

function App() {
  const [list, setList] = useState(["Eat", "Sleep", "Code"]);

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {list.map((item, index) => (
        <TodoItem
          key={index}
          text={item}
          onRemove={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default App;

