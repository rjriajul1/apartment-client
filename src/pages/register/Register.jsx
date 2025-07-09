import React from "react";
import { Link, useNavigate } from "react-router";
import registerLottie from "../../assets/lottie/register_lottie_file.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/Utils";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const { createUser, userProfileUpdate } = useAuth();
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const image = data?.image[0];
    const imageURL = await imageUpload(image);

    // save a new user firebase
    createUser(email, password)
      .then((res) => {
        if (res.user);
        {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "You are create an account successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        const userInfo = {
          displayName: name,
          photoURL: imageURL,
        };

        // update profile
        userProfileUpdate(userInfo)
          .then(() => {
            navigate('/')
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero py-10 lg:py-30 ">
      <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            aria-aria-labelledby="use lottie animation"
            animationData={registerLottie}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Name"
              />
              {errors?.name && (
                <p className="text-red-500">{"name is required"}</p>
              )}
              {/* photo */}
              <label className="label">Photo</label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="input"
              />
              {errors?.image && (
                <p className="text-red-500">{"image is required"}</p>
              )}
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
                {...register("password", { required: true , pattern:{
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:"Password must be at least 6 characters with 1 uppercase & 1 lowercase letter",
                }},)}
                className="input"
                placeholder="Password"
              />
              {errors?.password && (
                <p className="text-red-500">
                  {
                    errors?.password?.message
                  }
                </p>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
            <p className="text-[18px]">
              Already have an account ? please{" "}
              <Link className="text-blue-500 hover:underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
