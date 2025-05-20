import { Routes, Route } from "react-router-dom"
import MovieList from "./Components/MovieLIst.jsx"
import MovieDetail from "./Components/MovieDetail.jsx"
import Layout from "./Components/Layout.jsx"

function App() {

  return (
    <div>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MovieList />}/>
        <Route path="/details/:id" element={<MovieDetail />}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
