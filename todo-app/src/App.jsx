
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ]);

  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE and UPDATE
  const handleSubmit = () => {
    if (task.trim() === "") return;

    if (editId !== null) {
      setTasks(
        tasks.map((item) =>
          item.id === editId
            ? { ...item, title: task.trim() }
            : item
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), title: task.trim() },
      ]);
    }

    setTask("");
  };

  // READ: Display tasks using map() in JSX

  // EDIT: Load task into input
  const handleEdit = (item) => {
    setTask(item.title);
    setEditId(item.id);
  };

  // DELETE
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));

    if (editId === id) {
      setTask("");
      setEditId(null);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <p className="subtitle">Vite + React | CRUD Operations</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />

        <button className="add-btn" onClick={handleSubmit}>
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((item) => (
          <li key={item.id} className="task-item">
            <span>{item.title}</span>

            <div className="actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="count">
        Total Tasks: {tasks.length}
      </p>
    </div>
  );
}

export default App;
