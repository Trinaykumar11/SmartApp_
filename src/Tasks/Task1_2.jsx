import { useState } from "react";

function Task1_2() {
  const [isVisible, setIsVisible] = useState(false);

  const styles = {
    container: {
      padding: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    contentWrapper: {
      marginTop: "16px",
      overflow: "hidden",
      transition: "all 0.4s ease",
      maxHeight: isVisible ? "200px" : "0px",
      opacity: isVisible ? 1 : 0,
    },
    content: {
      padding: isVisible ? "12px" : "0px",
      backgroundColor: "#f3f4f6",
      borderRadius: "6px",
      transition: "padding 0.4s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontWeight: "600", marginBottom: "8px" }}>Task 1.2</h2>

      <button
        style={styles.button}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      <div style={styles.contentWrapper}>
        <div style={styles.content}>
          <p>
            The Task have been completed 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task1_2;

