import React, { useRef } from 'react';

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleLogin(e) {
    e.preventDefault();

    // const username = e.target['username'].value;
    // const password = e.target['password'].value;

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    alert(`username: ${username}\npassword: ${password}`);
  }

  return (
    <div className="main-container">
      <form
        className="login-container"
        onSubmit={handleLogin}
        autoComplete="off"
      >
        <h1>Welcome!Login hare</h1>
        <div className="input-container">
          <label htmlFor="username">username: </label>
          <input
            id="username"
            name="username"
            type={'text'}
            placeholder="username"
            ref={usernameRef}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">password: </label>
          <input
            id="password"
            name="password"
            type={'password'}
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        <button type="submit">Login</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
}

export default App;
