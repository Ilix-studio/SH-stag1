// CONTROL + F KEYWORDS FOR SEARCH
//lOGIN
//DASH

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  * {
      box-sizing: border-box;
  }

  body {
      font-family: 'Open Sans', sans-serif;
      font-size: .940rem;
      background-color: white;
      line-height: normal;
  }

  ul {
      background-color: white;
      list-style: none;
  }
  .login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding: 20px;
}
.login_back_btn {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}
.login_back_button:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}

.login-form {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow:
    10px 10px 45px rgba(0, 0, 0, 0.1),
    -10px -10px 45px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}
.login-form:hover {
  box-shadow:
    20px 20px 55px rgba(0, 0, 0, 0.15),
    -20px -20px 55px rgba(0, 0, 0, 0.15);
}

.login-form_title {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}
.login-form_input {
  width: 100%;
  padding: 0.875rem;
  margin-bottom: 1.25rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}
.login-form_input:focus {
  border-color: #2c3e50;
  outline: none;
  box-shadow: 0 0 10px #2c3e50;
}

@media (max-width: 768px) {
  .login-form {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .login-form {
    padding: 1.5rem;
  }
}

.login-submit-btn {
  width: 100%;
  padding: 0.875rem;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s,
    box-shadow 0.3s;
}
.login-submit-btn:hover {
  background: #1a252f;
  box-shadow: 1px 3px 5px #34495e;
}
.login-submit-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
//DASH
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto -40px;
  padding: 20px;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #ffffff;
  border-radius: 24px;
}
.dashboard-logo {
  display: flex;
  align-items: center;
}
.dashboard-logo > h1 {
  font-size: 1.2rem;
  color: #333;
}
.dashboard-logo > img {
  width: 55px;
  height: 50px;
}
.dashboard-logout_btn {
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}
.dashboard-logout_btn:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}

@media (max-width: 480px) {
  .dashboard-logout_btn {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}
.dashboard-main .welcome-message > h2 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
}

/* ====== cards ===== */

.dashboard-card-container {
  display: flex;
  gap: 20px;
  width: 100%;
}
@media (max-width: 768px) {
  .dashboard-card-container {
    flex-direction: column;
    align-items: center;
  }
}
.card {
  width: 100%;
  max-width: 270px;
  height: 100px;
  padding: 24px;
  background: #2c3e50;
  color: #bad7e9;
  border-radius: 12px;
  overflow: hidden;
  border-top: 1px solid rgb(2, 2, 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 2px solid #bad7e9;
}
.card:hover {
  background: #1a252f;
  box-shadow: 1px 3px 5px #34495e;
}
.card__content {
  display: flex;
  align-items: center;
  gap: 14px;
}
.card__count {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  color: white;
}
.card__description {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  z-index: 1;
  color: white;
}
.card__description > b {
  font-weight: 700;
}

`;

export default GlobalStyles;
