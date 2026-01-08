import { useState, useEffect } from "react";

function SearchableList() {
  const [items] = useState([
    { id: 1, name: "Apple iPhone", category: "Electronics" },
    { id: 2, name: "Samsung Galaxy", category: "Electronics" },
    { id: 3, name: "Nike Shoes", category: "Fashion" },
    { id: 4, name: "Adidas T-Shirt", category: "Fashion" },
    { id: 5, name: "Sony Headphones", category: "Electronics" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // Debounce logic (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Case-insensitive filtering
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  const styles = {
    container: {
      maxWidth: "500px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    item: {
      padding: "10px",
      borderRadius: "6px",
      backgroundColor: "#f3f4f6",
      marginBottom: "8px",
    },
    noResult: {
      color: "#6b7280",
      fontSize: "14px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "10px" }}>Task 2.2 - Searchable List</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      {/* Filtered list */}
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <strong>{item.name}</strong>
            <div>{item.category}</div>
          </div>
        ))
      ) : (
        <div style={styles.noResult}>No results found</div>
      )}
    </div>
  );
}

export default SearchableList;
