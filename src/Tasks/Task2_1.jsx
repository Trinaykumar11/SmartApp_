import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      maxWidth: "700px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    card: {
      padding: "12px",
      borderRadius: "8px",
      backgroundColor: "#f3f4f6",
      marginBottom: "10px",
    },
    name: {
      fontSize: "16px",
      fontWeight: "600",
    },
    text: {
      fontSize: "14px",
      color: "#374151",
    },
    loading: {
      fontSize: "16px",
      padding: "20px",
    },
    error: {
      color: "red",
      padding: "20px",
    },
  };

  if (loading) {
    return <div style={styles.loading}>Loading users...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Task 2.1 - User List</h2>

      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <div style={styles.name}>{user.name}</div>
          <div style={styles.text}>📧 {user.email}</div>
          <div style={styles.text}>🏙️ {user.address.city}</div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
