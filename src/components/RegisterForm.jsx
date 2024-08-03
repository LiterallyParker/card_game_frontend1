import { useContext, useState } from "react";
import { requestNewUser } from "../api/users";
import { AuthContext } from "../context/Authorization";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../context/Cards";

export default function RegisterForm() {
  const { setType } = useContext(CardsContext);
  const { setToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form States
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  // CSS States
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmedPasswordError, setConfirmedPasswordError] = useState("");

  function setEmptyFieldsWrong() {
    resetFields();
    if (!username) {
      setUsernameError("field-error");
    };
    if (!password) {
      setPasswordError("field-error");
    };
    if (!confirmedPassword) {
      setConfirmedPasswordError("field-error");
    };
  };

  function setPasswordsError() {
    resetFields();
    setPasswordError("field-error");
    setConfirmedPasswordError("field-error");
  }

  function resetFields() {
    setUsernameError("");
    setPasswordError("");
    setConfirmedPasswordError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const response = await requestNewUser({ username, firstname, lastname, password, confirmedPassword });

    if (response.error) {
      resetFields();
      if (response.name === "NoFieldsError") setEmptyFieldsWrong();
      if (response.name === "UsernameError") setUsernameError("field-error");
      if (response.name === "PasswordMatchError") setPasswordsError();
      setError(response.message);
      return setSubmitting(false);
    }
    resetFields();
    setToken(response.token);
    setUser(response.user);
    setError("");
    setUsernameError("");
    setSubmitting(false);
    setType("");
    return navigate("/user-hand");
  };

  return (
    <>
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="center">
          <h2>Register</h2>
          <div className="form-row">
            <label htmlFor="firstname">First Name:</label>
            <input className="input" type="text" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
          </div>
          <div className="form-row">
            <label htmlFor="firstname">Last Name:</label>
            <input className="input" type="text" value={lastname} onChange={(e) => { setLastName(e.target.value) }} />
          </div>
          <div className="form-row">
            <label htmlFor="firstname"><span className="required">*</span>Username:</label>
            <input className={`input ${usernameError}`} type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div className="form-row">
            <label htmlFor="firstname"><span className="required">*</span>Password:</label>
            <input className={`${passwordError} input`} type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="form-row">
            <label htmlFor="firstname"><span className="required">*</span>Confirm Password:</label>
            <input className={`${confirmedPasswordError} input`} type="password" value={confirmedPassword} onChange={(e) => { setConfirmedPassword(e.target.value) }} />
          </div>
          <div className="right">
            <span className="required">*required</span>
          </div>
          <button type="submit" disabled={submitting} onSubmit={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </form>
    </div>
    {
      error && <div className="form-error-div"><p className="form-error">{error}</p></div>
    }
    </>
  )
}