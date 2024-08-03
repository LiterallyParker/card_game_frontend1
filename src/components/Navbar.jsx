import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/Authorization"

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="middle navbar">
    {
      !user && <>
        <Link className="navbar-link" to="/hand">Play</Link>
        <Link className="navbar-link" to="/register">Register</Link>
        <Link className="navbar-link" to="/login">Login</Link>
      </>
    }
    {
      user && <>
      <Link className="navbar-link" to="/user-hand">Play</Link>
      <Link className="navbar-link" to="/account">Account</Link>
      <Link className="navbar-link" to="/my-hands">Hands</Link>
      <Link className="navbar-link" to="/" onClick={logOut}>Logout</Link>
      </>
    }
      <Link className="navbar-link" to="/leaderboard">Leaderboard</Link>
    </div>
  )
}