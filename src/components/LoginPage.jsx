import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'




function LoginPage() {

  const navigate = useNavigate();
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    
          <div className="login-page">
              <div className="form-field">
                  <label htmlFor="user-name">Enter A Username</label>
                  <input
                      value={username}
                      onChange={(e) => {
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
                      onChange={(e) => {
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
          <button
              onClick={(e) => {
                  e.preventDefault()
                      navigate("/search")
              }}>
            Submit
          </button>
        
    </div>
  )
}

export default LoginPage
