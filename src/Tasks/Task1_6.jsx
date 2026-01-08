import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { title: "Tab 1", content: "This Needs to be updated" },
    { title: "Tab 2", content: "Here you can see lot of updates" },
    { title: "Tab 3", content: "Need to complete the certification" },
  ];

  const styles = {
    container: {
      maxWidth: "450px",
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    headers: {
      display: "flex",
      borderBottom: "2px solid #e5e7eb",
      marginBottom: "12px",
    },
    tabButton: {
      flex: 1,
      padding: "10px",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
      fontSize: "15px",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    activeTab: {
      borderBottom: "3px solid #2563eb",
      color: "#2563eb",
      fontWeight: "600",
    },
    content: {
      padding: "12px",
      fontSize: "14px",
      color: "#374151",
      transition: "opacity 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "10px" }}>Task 1.6 - Tabs</h2>

      {/* Tab headers */}
      <div style={styles.headers}>
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              ...styles.tabButton,
              ...(activeTab === index ? styles.activeTab : {}),
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={styles.content}>
        {tabData[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
