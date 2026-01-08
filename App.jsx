import { useState } from "react";
import Task1_1 from "./src/Tasks/Task1_1";
import Task1_2 from "./src/Tasks/Task1_2";
import Task1_3 from "./src/Tasks/Task1_3";
import Task1_4 from "./src/Tasks/Task1_4";
import Task1_5 from "./src/Tasks/Task1_5";
import Task1_6 from "./src/Tasks/Task1_6";
import Quiz from "./src/Tasks/Quiz";
import Task2_1 from "./src/Tasks/Task2_1";
import Task2_2 from "./src/Tasks/Task2_2";
import Task2_3 from "./src/Tasks/Task2_3";
import Task2_4 from "./src/Tasks/Task2_4";
import Task2_5 from "./src/Tasks/Task2_5";
import Task2_6 from "./src/Tasks/Task2_6";
import WeatherApp from "./src/Tasks/WeatherApp";

function App() {
  const [activeTask, setActiveTask] = useState("1.1");

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    layout: {
      display: "flex",
      gap: "20px",
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    sidebarTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    button: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      backgroundColor: "#e5e7eb",
    },
    activeButton: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
    },
    content: {
      flex: 1,
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>My Tasks</h1>

      <div style={styles.layout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarTitle}>Tasks</div>

          <button
            onClick={() => setActiveTask("1.1")}
            style={{
              ...styles.button,
              ...(activeTask === "1.1" ? styles.activeButton : {}),
            }}
          >
            Task 1.1
          </button>

          <button
            onClick={() => setActiveTask("1.2")}
            style={{
              ...styles.button,
              ...(activeTask === "1.2" ? styles.activeButton : {}),
            }}
          >
            Task 1.2
          </button>

          <button
            onClick={() => setActiveTask("1.3")}
            style={{
              ...styles.button,
              ...(activeTask === "1.3" ? styles.activeButton : {}),
            }}
          >
            Task 1.3
          </button>

          <button
            onClick={() => setActiveTask("1.4")}
            style={{
              ...styles.button,
              ...(activeTask === "1.4" ? styles.activeButton : {}),
            }}
          >
            Task 1.4
          </button>

          <button
            onClick={() => setActiveTask("1.5")}
            style={{
              ...styles.button,
              ...(activeTask === "1.5" ? styles.activeButton : {}),
            }}
          >
            Task 1.5
          </button>

          <button
            onClick={() => setActiveTask("1.6")}
            style={{
              ...styles.button,
              ...(activeTask === "1.6" ? styles.activeButton : {}),
            }}
          >
            Task 1.6
          </button>

          <button
            onClick={() => setActiveTask("quiz")}
            style={{
              ...styles.button,
              ...(activeTask === "quiz" ? styles.activeButton : {}),
            }}
          >
            Mini Project - Quiz
          </button>

          <button
            onClick={() => setActiveTask("2.1")}
            style={{
              ...styles.button,
              ...(activeTask === "2.1" ? styles.activeButton : {}),
            }}
          >
            Task 2.1
          </button>

          <button
            onClick={() => setActiveTask("2.2")}
            style={{
              ...styles.button,
              ...(activeTask === "2.2" ? styles.activeButton : {}),
            }}
          >
            Task 2.2
          </button>

          <button
            onClick={() => setActiveTask("2.3")}
            style={{
              ...styles.button,
              ...(activeTask === "2.3" ? styles.activeButton : {}),
            }}
          >
            Task 2.3
          </button>

          <button
            onClick={() => setActiveTask("2.4")}
            style={{
              ...styles.button,
              ...(activeTask === "2.4" ? styles.activeButton : {}),
            }}
          >
            Task 2.4
          </button>

          <button
            onClick={() => setActiveTask("2.5")}
            style={{
              ...styles.button,
              ...(activeTask === "2.5" ? styles.activeButton : {}),
            }}
          >
            Task 2.5
          </button>

          <button
            onClick={() => setActiveTask("2.6")}
            style={{
              ...styles.button,
              ...(activeTask === "2.6" ? styles.activeButton : {}),
            }}
          >
            Task 2.6
          </button>

          <button
            onClick={() => setActiveTask("weather")}
            style={{
              ...styles.button,
              ...(activeTask === "weather" ? styles.activeButton : {}),
            }}
          >
            Mini Project 2 – Weather
          </button>



        </div>

        {/* Content Area */}
        <div style={styles.content}>
          {activeTask === "1.1" && <Task1_1 />}
          {activeTask === "1.2" && <Task1_2 />}
          {activeTask === "1.3" && <Task1_3 />}
          {activeTask === "1.4" && <Task1_4 />}
          {activeTask === "1.5" && <Task1_5 />}
          {activeTask === "1.6" && <Task1_6 />}
          {activeTask === "quiz" && <Quiz />}
          {activeTask === "2.1" && <Task2_1 />}
          {activeTask === "2.2" && <Task2_2 />}
          {activeTask === "2.3" && <Task2_3 />}
          {activeTask === "2.4" && <Task2_4 />}
          {activeTask === "2.5" && <Task2_5 />}
          {activeTask === "2.6" && <Task2_6 />}
          {activeTask === "weather" && <WeatherApp />}
        </div>
      </div>
    </div>
  );
}

export default App;
