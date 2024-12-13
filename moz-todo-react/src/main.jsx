import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const DATA = [
  { id: "1", name: "Uno", price: 23, ownerId: 1 },
  { id: "2", name: "Cards", price: 10, ownerId: 2 },
  { id: "3", name: "Monopoly", price: 30, ownerId: 3 },
  { id: "4", name: "Plockepin", price: 3, ownerId: 1}
];

const OWNERS = [
  { id: 1, name: "Elsa" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Joel" },
];

const GamesNotForSale = [
  {id: 11, name: "game", ownerID: 2}
]



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} owners={OWNERS} games={GamesNotForSale} />
  </StrictMode>
);
