import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          width: "400px",
          maxWidth: "90%",
          padding: "16px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          animation: "scaleIn 0.25s ease",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>{title}</h3>

        <div style={{ marginBottom: "12px" }}>{children}</div>

        <div style={{ textAlign: "right" }}>
          {footer ? footer : (
            <button onClick={onClose}>Close</button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Task2_6() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 2.6 – Reusable Modal</h2>

      <button
        onClick={() => {
          console.log("OPEN MODAL CLICKED"); 
          setOpen(true);
        }}
        style={{
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Reusable Modal"
        footer={
          <button onClick={() => setOpen(false)}>Close</button>
        }
      >
        we need to create a 
          <strong> document </strong> as soon as possible.
      </Modal>
    </div>
  );
}

export default Task2_6;
