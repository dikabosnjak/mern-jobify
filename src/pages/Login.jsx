import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>Login</div>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
