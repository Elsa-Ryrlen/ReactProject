import React from 'react';
import { useParams } from 'react-router-dom';

function GamePage({ tasks, owners }) {
  const { gameId } = useParams();
  const game = tasks.find(task => task.id === gameId);

  if (!game) {
    return <p>Game not found</p>;
  }

  const owner = owners.find(owner => owner.id === game.ownerId);
  const ownerName = owner ? owner.name : "Unknown";

  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{game.name}</h2>
      <p style={styles.infoText}>Price: <strong>{game.price}€</strong></p>
      <p style={styles.infoText}>Owner: <strong>{ownerName}</strong></p>
      {owner && (
        <p style={styles.infoText}>Owner ID: <strong>{owner.id}</strong></p>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <p style={styles.formText}>Add new information below:</p>
        <input
          type="text"
          placeholder="Buyer ID"
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Buyer Name"
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onClick={() => alert('Are you sure?')}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Sell Game
        </button>
      </form>
    </div>
  );
}


const styles = {
  container: {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '600px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  infoText: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#555',
  },
  form: {
    marginTop: '20px',
  },
  formText: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#333',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  errorText: {
    color: '#d9534f',
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '18px',
  },
};

const buttonStyle = {
    padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
  };

export default GamePage;
