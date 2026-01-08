import { useState, useEffect } from "react";

function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: "Dairy milk", price: 29.99 },
    { id: 2, name: "Hatsun curd", price: 49.99 },
    { id: 3, name: "Munch Max", price: 19.99 },
  ]);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const styles = {
    container: {
      maxWidth: "700px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    section: {
      marginBottom: "20px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    product: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderRadius: "6px",
      backgroundColor: "#f3f4f6",
      marginBottom: "8px",
    },
    button: {
      padding: "6px 12px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      marginLeft: "6px",
    },
    qtyButton: {
      padding: "4px 10px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#374151",
      color: "#ffffff",
      margin: "0 4px",
    },
    removeButton: {
      padding: "4px 10px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#ef4444",
      color: "#ffffff",
      marginLeft: "8px",
    },
    total: {
      fontSize: "18px",
      fontWeight: "bold",
      textAlign: "right",
      marginTop: "10px",
    },
    empty: {
      color: "#6b7280",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "15px" }}>
        Task 2.4 - Shopping Cart
      </h2>

      {/* Products */}
      <div style={styles.section}>
        <div style={styles.title}>Products</div>
        {products.map((product) => (
          <div key={product.id} style={styles.product}>
            <div>
              {product.name} - ₹{product.price}
            </div>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div style={styles.section}>
        <div style={styles.title}>Cart</div>

        {cart.length === 0 ? (
          <div style={styles.empty}>Cart is empty</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={styles.product}>
              <div>
                {item.name} - ₹{item.price} × {item.quantity}
              </div>
              <div>
                <button
                  style={styles.qtyButton}
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  −
                </button>
                <button
                  style={styles.qtyButton}
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
                <button
                  style={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div style={styles.total}>
          Total: ₹{total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
