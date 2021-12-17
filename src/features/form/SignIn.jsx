import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllUsers } from './../users/usersSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const users = useSelector(selectAllUsers);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isActive = [username, password].every(Boolean);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if ((username, password)) {
      let findedUser = users.find((u) => u.username === username);
      findedUser
        ? navigate(`/${username}`)
        : setError('username or password is wrong');
      setUsername('');
      setPassword('');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="d-flex">
      <div className="containerDevider-left bg-signIn d-flex  flex-column align-items-center">
        <h1>Welcome To Motivator&nbsp;&#127947;</h1>
        <div className="slide-in-blurred-top vertical-centerer d-flex align-items-center">
          <form className="contact-us">
            <input
              type="text"
              placeholder={error && error.length > 0 ? error : 'Username'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder={error && error.length > 0 ? error : 'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


              <button onClick={handleSubmit} type="button" disabled={!isActive}>
                SIGN IN
              </button>

            <div className="p-4 text-center">
              <Link to="/register">Don't you have an account? Create one</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="containerDevider-right  signInImg"></div>
    </div>
  );
};

export default SignIn;
