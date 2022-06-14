import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import Guest from './routes/Guest'
import Movie from './routes/Movie'
import Festival from './routes/Festival'
import CreateGuest from './routes/CreateGuest'
import CreateMovie from './routes/CreateMovie'
import CreateFestival from './routes/CreateFestival'
import DeleteMovie from './routes/DeleteMovie'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="Guest" element={<Guest />} />
        <Route path="Movie" element={<Movie />} />
        <Route path="Festival" element={<Festival />} />
        <Route path="CreateGuest" element={<CreateGuest />} />
        <Route path="CreateMovie" element={<CreateMovie />} />
        <Route path="CreateFestival" element={<CreateFestival />} />
        <Route path="DeleteMovie" element={<DeleteMovie />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
