import { Routes, Route } from "react-router-dom"
import MovieList from "./Components/MovieLIst.jsx"
import MovieDetail from "./Components/MovieDetail.jsx"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MovieList />}/>
      <Route path="/details/:id" element={<MovieDetail />}/>
    </Routes>
    </>
  )
}

export default App
