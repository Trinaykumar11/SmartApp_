import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const styles = {
    container: {
      maxWidth: "400px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "12px",
    },
    inputRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
    },
    input: {
      flex: 1,
      padding: "8px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    addButton: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#2563eb",
      color: "#ffffff",
    },
    todoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      borderRadius: "6px",
      backgroundColor: "#f3f4f6",
      marginBottom: "8px",
    },
    deleteButton: {
      padding: "4px 8px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#ef4444",
      color: "#ffffff",
      fontSize: "12px",
    },
    count: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#374151",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Task 1.5 - Todo List</h2>

      {/* Input and Add Button */}
      <div style={styles.inputRow}>
        <input
          type="text"
          value={input}
          placeholder="Enter a todo..."
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>

      {/* Todo List */}
      {todos.map((todo, index) => (
        <div key={index} style={styles.todoItem}>
          <span>{todo}</span>
          <button
            onClick={() => deleteTodo(index)}
            style={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      ))}

      {/* Total Count */}
      <div style={styles.count}>
        Total Todos: <strong>{todos.length}</strong>
      </div>
    </div>
  );
}

export default TodoList;
