import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthContext from "@/provider/AuthContext";
import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { saveUser } from "@/api/utils";
import axios from "axios";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo =
    location.state?.from === "/login" ? "/" : location.state?.from || "/";
  const { loading, signIn, setLoading, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password);
    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(redirectTo, { replace: true });
      })
      .catch((err) => {
        const errorMessage = err.message;
        const extractedMessage = errorMessage
          .split("(")[1]
          ?.split(")")[0]
          ?.replace("auth/", "")
          .replace("-", " ");
        toast.error(extractedMessage);
        setLoading(false);
      });
  };

  const handleGoogle = async () => {
    try {
      //User Registration using google
      const data = await googleSignIn();
      const { displayName, email, photoURL } = data.user;
      const randomSalary = Math.floor(Math.random() * 100000) + 30000;
      const randomAccount = Math.floor(Math.random() * 1000000000) + 1000000000;
      const userInfo = {
        name: displayName,
        email: email,
        photoURL: photoURL,
        role: "employee",
        account: randomAccount,
        salary: randomSalary,
        designation: "Sales Manager",
      };
      axios.post(
        `${import.meta.env.VITE_API_URL}/users/${userInfo?.email}`,
        userInfo
      );
      navigate(redirectTo, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      const errorMessage = err.message;
      const extractedMessage = errorMessage
        .split("(")[1]
        ?.split(")")[0]
        ?.replace("auth/", "")
        .replace("-", " ");
      toast.error(extractedMessage);
      setLoading(false);
    }
  };
  return (
    <div>
      <h3 className="text-primary-2 text-2xl md:text-4xl font-bold text-center my-6">
        Login To Your Account
      </h3>
      <form
        onSubmit={handleLogin}
        className="bg-banner max-w-lg mx-auto p-10 rounded-lg"
      >
        <div className="max-w-sm items-center gap-1.5 mx-auto backdrop-blur-lg p-6 shadow-xl rounded-lg ">
          <Label htmlFor="email">Email</Label>
          <Input
            className="bg-white/20 mb-2"
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              className="bg-white/20 mb-2"
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-gray-600" size={20} />
              ) : (
                <AiOutlineEye className="text-gray-600" size={20} />
              )}
            </span>
          </div>

          <Button className="w-full mb-2 bg-primary-1">
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Login"
            )}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleGoogle();
            }}
            className="w-full bg-primary-2"
          >
            Continue with <FcGoogle /> Google
          </Button>
          <p className="text-center text-sm py-2 text-gray-700">
            Dont’t Have An Account?
            <Link className="text-primary-1 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
