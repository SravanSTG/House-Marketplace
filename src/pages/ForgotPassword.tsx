import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { IoIosArrowForward } from "react-icons/io";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            id="email"
            placeholder="email"
            value={email}
            onChange={onChange}
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <IoIosArrowForward size="34px" style={{ color: "#fff" }} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
