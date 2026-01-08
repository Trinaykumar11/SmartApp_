import { useState } from "react";

function ColorPicker() {
  const [bgColor, setBgColor] = useState("white");

  const styles = {
    container: {
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "background-color 0.3s ease",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "12px",
    },
    colorName: {
      marginBottom: "12px",
      fontSize: "14px",
    },
    buttonRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "15px",
    },
    colorButton: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      color: "#ffffff",
      fontSize: "14px",
    },
    resetButton: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#374151",
      color: "#ffffff",
      fontSize: "14px",
    },
  };

  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <h2 style={styles.title}>Task 1.4 - Color Picker</h2>

      <div style={styles.colorName}>
        Current Color: <strong>{bgColor}</strong>
      </div>

      <div style={styles.buttonRow}>
        <button
          style={{ ...styles.colorButton, backgroundColor: "red" }}
          onClick={() => setBgColor("red")}
        >
          Red
        </button>

        <button
          style={{ ...styles.colorButton, backgroundColor: "blue" }}
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>

        <button
          style={{ ...styles.colorButton, backgroundColor: "green" }}
          onClick={() => setBgColor("green")}
        >
          Green
        </button>

        <button
          style={{
            ...styles.colorButton,
            backgroundColor: "goldenrod",
          }}
          onClick={() => setBgColor("yellow")}
        >
          Yellow
        </button>

        <button
          style={{ ...styles.colorButton, backgroundColor: "purple" }}
          onClick={() => setBgColor("purple")}
        >
          Purple
        </button>
      </div>

      <button
        style={styles.resetButton}
        onClick={() => setBgColor("white")}
      >
        Reset
      </button>
    </div>
  );
}

export default ColorPicker;
