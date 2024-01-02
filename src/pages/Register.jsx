import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Adam" />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="Doe"
          labelText="Last Name"
        />
        <FormRow type="text" name="location" defaultValue="Earth" />
        <FormRow type="email" name="email" defaultValue="adam.doe@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
