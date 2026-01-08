import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [isCountdown, setIsCountdown] = useState(false);
  const [countdownInput, setCountdownInput] = useState(60); // seconds

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (isCountdown) {
            if (prev <= 0) {
              setIsRunning(false);
              return 0;
            }
            return prev - 10;
          }
          return prev + 10;
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning, isCountdown]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(milliseconds).padStart(2, "0")}`;
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const startCountdown = () => {
    setTime(countdownInput * 1000);
    setLaps([]);
    setIsCountdown(true);
    setIsRunning(true);
  };

  const styles = {
    container: {
      maxWidth: "420px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    time: {
      fontSize: "32px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "15px",
    },
    controls: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "15px",
    },
    button: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#2563eb",
      color: "#ffffff",
    },
    resetButton: {
      backgroundColor: "#ef4444",
    },
    lapButton: {
      backgroundColor: "#374151",
    },
    inputRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
    },
    input: {
      flex: 1,
      padding: "6px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    laps: {
      marginTop: "10px",
      maxHeight: "150px",
      overflowY: "auto",
    },
    lapItem: {
      fontSize: "14px",
      padding: "4px 0",
      borderBottom: "1px solid #e5e7eb",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "10px" }}>Task 2.5 - Stopwatch</h2>

      {/* Time Display */}
      <div style={styles.time}>{formatTime(time)}</div>

      {/* Controls */}
      <div style={styles.controls}>
        <button
          style={styles.button}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        <button
          style={{ ...styles.button, ...styles.lapButton }}
          onClick={recordLap}
          disabled={!isRunning || isCountdown}
        >
          Lap
        </button>

        <button
          style={{ ...styles.button, ...styles.resetButton }}
          onClick={reset}
        >
          Reset
        </button>
      </div>

      {/* Countdown Mode */}
      <div style={styles.inputRow}>
        <input
          type="number"
          min="1"
          value={countdownInput}
          onChange={(e) => setCountdownInput(e.target.value)}
          style={styles.input}
          placeholder="Seconds"
        />
        <button style={styles.button} onClick={startCountdown}>
          Start Countdown
        </button>
      </div>

      {/* Laps */}
      {laps.length > 0 && (
        <div style={styles.laps}>
          <strong>Laps</strong>
          {laps.map((lap, index) => (
            <div key={index} style={styles.lapItem}>
              Lap {index + 1}: {formatTime(lap)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
