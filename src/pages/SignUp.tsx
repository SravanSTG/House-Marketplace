import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, FieldValue } from "firebase/firestore";
import { db } from "../firebase.config";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { IoIosArrowForward } from "react-icons/io";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface FirestoreUserData {
  name: string;
  email: string;
  password?: string;
  timestamp: FieldValue;
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(db);

    try {
      const auth = getAuth();
      console.log(auth);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      } else {
        toast.error("User is not authenticated");
      }

      const formDataCopy: FirestoreUserData = {
        ...formData,
        timestamp: serverTimestamp(),
      };
      delete formDataCopy.password;

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show-password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          {/* <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link> */}

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <IoIosArrowForward size="34px" style={{ color: "#fff" }} />
            </button>
          </div>
        </form>

        {/* Google OAuth */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
};

export default SignUp;
