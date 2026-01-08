import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data = formData) => {
    const newErrors = {};

    // Name validation
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (
      data.password.length < 8 ||
      !/[A-Z]/.test(data.password) ||
      !/[0-9]/.test(data.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include 1 uppercase letter and 1 number";
    }

    // Confirm password validation
    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Real-time validation
    setErrors(validate(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const isFormValid = Object.keys(errors).length === 0 &&
    Object.values(formData).every((val) => val !== "");

  const styles = {
    form: {
      maxWidth: "420px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    field: {
      marginBottom: "12px",
    },
    label: {
      display: "block",
      marginBottom: "4px",
      fontWeight: "500",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginTop: "4px",
    },
    button: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "14px",
      cursor: "pointer",
      marginTop: "10px",
      opacity: isFormValid ? 1 : 0.6,
    },
    success: {
      textAlign: "center",
      color: "green",
      fontSize: "16px",
      fontWeight: "600",
    },
  };

  if (submitted) {
    return <div style={styles.success}>✅ Registration Successful!</div>;
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "12px" }}>
        Task 2.3 - Registration Form
      </h2>

      {/* Name */}
      <div style={styles.field}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <div style={styles.error}>{errors.name}</div>}
      </div>

      {/* Email */}
      <div style={styles.field}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}
      </div>

      {/* Password */}
      <div style={styles.field}>
        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.password && (
          <div style={styles.error}>{errors.password}</div>
        )}
      </div>

      {/* Confirm Password */}
      <div style={styles.field}>
        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.confirmPassword && (
          <div style={styles.error}>{errors.confirmPassword}</div>
        )}
      </div>

      <button type="submit" style={styles.button} disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
