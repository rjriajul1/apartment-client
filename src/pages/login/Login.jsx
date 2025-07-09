import React from "react";
import { Link } from "react-router";
import loginLottie from '../../assets/lottie/login_lottie.file.json'
import Lottie from "lottie-react";
const Login = () => {
  return (
    <div className="hero lg:py-30 py-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <Lottie style={{width:'350px'}} aria-aria-labelledby="use lottie animation" animationData={loginLottie} loop={true}/>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/*password*/}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            <p className="text-[18px]">
              Don't have an account ? please{" "}
              <Link className="text-blue-500 hover:underline" to="/register">
              Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
