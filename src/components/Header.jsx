import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <div className="center header">
      <Link to="/">
        <h1>Parker's Poker</h1>
      </Link>
      <Navbar />
    </div>
  )
}