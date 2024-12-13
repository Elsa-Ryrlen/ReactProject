import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import GamePage from "./components/GamePage"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App({ tasks, owners }) {
  const [games, setGames] = useState(tasks);
  const [gameOwners, setGameOwners] = useState(owners);


  // Function to add a new game to the list
  function addGame(newGame) {
    setGames((prevGames) => [...prevGames, newGame]);
    
  }

  // Function to delete a game by ID
  function handleDelete(id) {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  }

  // Function to get the owner name based on ownerId
  function getOwnerName(ownerId) {
    const owner = gameOwners.find((o) => o.id === ownerId);
    return owner ? owner.name : "Unknown";
  }

  // Function to update game ownership
  function updateGameOwner(gameId, newOwnerId) {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === gameId ? { ...game, ownerId: newOwnerId } : game
      )
    );

    // Add the new owner to the owners list if not already present
    setGameOwners((prevOwners) => {
      const ownerExists = prevOwners.some((owner) => owner.id === newOwnerId);
      if (!ownerExists) {
        return [...prevOwners, { id: newOwnerId }];
      }
      return prevOwners;
    });
  }

  // Map through games to create the list
  const taskList = games.map((game) => (
    <Todo
      id={game.id}
      name={game.name}
      price={game.price}
      completed={game.completed}
      key={game.id}
      ownerName={getOwnerName(game.ownerId)}
      handleDelete={handleDelete}
    />
  ));

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <div className="todoapp stack-large">
              <h1>Game Festival</h1>
              <Form onSubmit={addGame} />
              <h2 id="list-heading">{games.length} games available</h2>
              <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {games.map((game) => (
                  <Todo
                    id={game.id}
                    name={game.name}
                    price={game.price}
                    completed={game.completed}
                    key={game.id}
                    ownerName={getOwnerName(game.ownerId)}
                    handleDelete={handleDelete}
                  />
                ))}
              </ul>
            </div>
          }
        />
        <Route
          path="/game/:gameId"
          element={
            <GamePage
              tasks={games}
              owners={gameOwners}
              updateGameOwner={updateGameOwner}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
