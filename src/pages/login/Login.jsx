import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginLottie from "../../assets/lottie/login_lottie.file.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Login = () => {
  const { userSignIn } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;

    userSignIn(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your are login successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state || '/')
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero lg:py-30 py-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "350px" }}
            aria-aria-labelledby="use lottie animation"
            animationData={loginLottie}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />

              {errors?.email && (
                <p className="text-red-500">{"email is required"}</p>
              )}

              {/*password*/}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="input"
                placeholder="Password"
              />

              {errors?.password && (
                <p className="text-red-500">{"password is required"}</p>
              )}

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
