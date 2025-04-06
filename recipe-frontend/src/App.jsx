// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './components/Login' // ✅ You missed this import
// import Register from './components/Register'
// import Home from './components/Home'
// import { Navbar } from './components/Navbar'
// import { AddRecipe } from './components/AddRecipe'
// import { ViewRecipies } from './components/ViewRecipies'

// function App() {
//   // const isLoggedIn = localStorage.getItem('username') !== null;

//   return (
//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/addRecipe" element={<AddRecipe />} />
//         <Route path="/viewRecipies" element={<ViewRecipies />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { AddRecipe } from './components/AddRecipe'
import { ViewRecipies } from './components/ViewRecipies'
import { LayoutWithNavbar } from './components/LayoutWithNavbar'
import { LayoutWithoutNavbar } from './components/LayoutWithoutNavbar'
import { ExploreRecipe } from './components/ExploreRecipe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithoutNavbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<LayoutWithNavbar />}>
          <Route path="/home" element={<Home />} />
        
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/viewRecipies" element={<ViewRecipies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

