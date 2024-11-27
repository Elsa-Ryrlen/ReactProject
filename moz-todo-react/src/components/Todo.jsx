import React from 'react';
import { Link } from 'react-router-dom';

function Todo(props) {
  return (
    <li className="todo stack-small" style={cardStyle}>
      <div style={inputContainerStyle}>
        <p style={gameInfoStyle}><b>{props.name}</b> - {props.price}€</p>
        <p style={ownerStyle}>Owned by: <i>{props.ownerName}</i></p> 
      </div>
      <div className="btn-group" style={buttonGroupStyle}>
        <Link to={`/game/${props.id}`}>
          <button type="button" className="btn btn-info" style={buttonStyle}>
            Choose
          </button>
        </Link>
        <button 
          type="button" 
          className="btn btn__danger" 
          style={buttonStyle}
          onClick={() => props.handleDelete(props.id)} // Call handleDelete with the game ID
          >
          Delete
        </button>
      </div>
    </li>
  );
}

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "15px",
  margin: "10px 0",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const gameInfoStyle = {
  fontSize: "1.5rem", // Increased font size
  fontWeight: "bold",
  margin: "0",
};

const ownerStyle = {
  fontSize: "1.2rem", // Increased font size
  color: "#555",
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
};

const buttonStyle = {
  padding: "10px 16px", // Slightly increased padding
  borderRadius: "5px",
  fontSize: "2rem", // Increased font size
  cursor: "pointer",
};

export default Todo;
