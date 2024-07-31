import { useContext } from "react"
import { AuthContext } from "../context/Authorization"
import { Link } from "react-router-dom";

export default function Account() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="center account">
      {
        user && <>
          <h1>Account</h1>
          <hr width={300} />
          <div className="user-title-card">
            <div className="center user-main-info">
              <h2>{user.username}</h2>
              <hr width={100} />
              <h3 className="no-margin">{user.firstname} {user.lastname}</h3>
              <hr width={100} />
              <p className="no-margin">{user.email}</p>
              <hr width={100} />
              <p className="no-margin">{user.role} user</p>
              <hr width={100} />
            </div>
            <p>
              More features coming soon!
            </p>
          </div>
        </>
      }
      <a onClick={logOut}>
      <Link to="/">
        Log out
      </Link>
        </a>
    </div>
  )
}