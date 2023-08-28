import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='loginScreen'>

       <div className="loginBox">
        <h2>Welcome!</h2>
        <div className="userSelect">
          <label htmlFor="users">Login with:</label>
            <select name="users" id="users">
              <option value="james">James</option>
              <option value="daniel" selected> Daniel</option>
            </select>
        </div>
          <div className="loginBox__bottom">
            <button>Continue</button>
            <a href="">Add user</a>
          </div>
       </div> 
    </div>
  )
}

export default LoginScreen