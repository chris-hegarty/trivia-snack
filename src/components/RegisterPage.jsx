import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  //Need to add player context.

  return (
    <div className="register-page">
      <div className="form-field">
        <label htmlFor="user-name">Enter A Username</label>
        <input 
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          type="text"
          id="user-name" 
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Enter a Password</label>
          <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.ariaValueText)
            }}
            type={show === true ? "text" : "password"}
            id="password"
          />
          <span>
            <label htmlFor="check-box">Show Password</label>
            <input
              value={show}
              onChange={(e) => { setShow(e.target.checked) }}
              type="checkbox"
              name="register-checkbox"
              id="check-box"
            />
          </span>
      </div>
      <div className="form-field">
        <label htmlFor="confirm-password">Confirm Your Password</label>
        <input
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value)
          }}
          type={show === true ? "text" : "password"}
          id="confirm-password"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault()
          if (password === confirm) {
            navigate("/game")
          }
        }}>
        Submit
      </button>
    </div>
  )
}

export default RegisterPage
