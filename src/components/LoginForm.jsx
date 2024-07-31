import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestUser } from "../api/users";
import { AuthContext } from "../context/Authorization";

export default function LoginForm() {
  const { setToken, setUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function setEmptyFieldErrors() {
    resetFields();
    if (!username) {
      setUsernameError("field-error");
    }
    if (!password) {
      setPasswordError("field-error");
    }
  }

  function setErrors() {
    setUsernameError("field-error");
    setPasswordError("field-error");
  }

  function resetFields() {
    setUsernameError("");
    setPasswordError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const response = await requestUser({ username, password });
    if (response.error) {
      if (response.name === "NoFieldsError") setEmptyFieldErrors();
      if (response.name === "CredentialError") setErrors();
      setError(response.message);
      return setSubmitting(false);
    }
    resetFields();
    setToken(response.token);
    setUser(response.user);
    setError("");
    setSubmitting(false);
    return navigate("/user-hand")
  };

  return (
    <>
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="center">
          <h2>Login</h2>
          <div className="form-row">
            <label htmlFor="username"><span className="required">*</span>Username:</label>
            <input className={`input ${usernameError}`} type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div className="form-row">
            <label htmlFor="password"><span className="required">*</span>Password:</label>
            <input className={`input ${passwordError}`} type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
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
  );
};