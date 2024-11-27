import { useState } from "react";

function Form({ onSubmit }) {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [ownerId, setOwnerId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Creating a new game object
    const newGame = { id, price, name, ownerId: parseInt(ownerId, 10) };

    // Adding the new game to the list
    onSubmit(newGame);

    // Resetting form fields
    setId("");
    setPrice("");
    setName("");
    setOwnerId("");
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={labelStyle}>Add New Game!</h2>
      <div style={inputContainerStyle}>
      <input
        type="text"
        placeholder="Game ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Price (€)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Game Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Owner ID"
        value={ownerId}
        onChange={(e) => setOwnerId(e.target.value)}
        required
        style={inputStyle}
      />
      </div>
      <button type="submit" style={buttonStyle}>
        Add
      </button>
    </form>
  );
}

const formStyle = {
  maxWidth: "320px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
};

const labelStyle = {
  textAlign: "center",
  color: "#333",
  marginBottom: "15px",
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 15px",
  fontSize: "16px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  width: "100%",
};

export default Form;
