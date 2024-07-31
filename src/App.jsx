import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Hand from "./pages/Hand"
import UserHand from "./pages/UserHand"
import UserHands from "./pages/UserHands"
import Account from "./pages/Account"

// CSS
import './css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/hand" element={<Hand />} />
          <Route path="/user-hand" element={<UserHand />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-hands" element={<UserHands />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
