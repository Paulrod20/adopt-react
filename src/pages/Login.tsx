import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="login-page">
      <Link to="/" className="login-logo-link">
        <img src="/assets/a.png" className="login-logo" alt="Adopt Logo" />
      </Link>

      <div className={`container ${isActive ? 'active' : ''}`}>
        
        {/* Login Form */}
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box register">
          <form>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            </div>
          </form>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={handleRegisterClick}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome to Adopt!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;