import { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const styles = {
    container: {
      maxWidth: "400px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      marginBottom: "12px",
    },
    text: {
      fontSize: "14px",
      color: "#374151",
      marginBottom: "6px",
    },
    count: {
      fontSize: "13px",
      color: "#6b7280",
      marginBottom: "12px",
    },
    button: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#ef4444",
      color: "#ffffff",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "12px" }}>Task 1.3 - Controlled Input</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={styles.input}
      />

      <div style={styles.text}>
        <strong>Current Text:</strong> {text || "—"}
      </div>

      <div style={styles.count}>
        Character Count: {text.length}
      </div>

      <button onClick={() => setText("")} style={styles.button}>
        Clear
      </button>
    </div>
  );
}

export default TextInput;
