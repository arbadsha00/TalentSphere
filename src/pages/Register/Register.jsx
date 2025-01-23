import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import AuthContext from "@/provider/AuthContext";
import { Button } from "@/components/ui/button";
import { imageUpload } from "@/api/utils";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, update, googleSignIn, loading, setLoading } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(photo);
    const photoURL = await imageUpload(photo);

    const role = form.get("role");
    const account = form.get("account");
    const salary = form.get("salary");
    const designation = form.get("designation");
    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    // console.log(name, photo, email, password);
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        toast.success("Registration Successful");
        update({ displayName: name, photoURL: photoURL }).then(() => {
          const userInfo = {
            name,
            email,
            photoURL,
            role,
            account: Number(account),
            salary: Number(salary),
            designation,
          };

          navigate(location?.state ? location.state : "/");
        });
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
      console.log(userInfo);
      navigate(location?.state ? location.state : "/");
      toast.success("Registration Successful");
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
        Register Your Account
      </h3>
      <form
        onSubmit={handleRegister}
        className="bg-banner max-w-lg mx-auto p-10 rounded-lg"
      >
        <div className="max-w-sm items-center gap-1.5 mx-auto backdrop-blur-lg p-6 shadow-xl rounded-lg ">
          <Label htmlFor="name">Name</Label>
          <Input
            className="bg-white/20 mb-2"
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            required
          />
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
          <Label htmlFor="photo">Photo</Label>
          <Input
            className="bg-white/20 text-gray-500 mb-2"
            name="photo"
            type="file"
            id="photo"
            required
          />
          <Label htmlFor="role">Role</Label>
          <Select name="role" required>
            <SelectTrigger className="bg-white/20  mb-2">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Roles</SelectLabel>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Label htmlFor="account">Bank_Account_No</Label>
          <Input
            className="bg-white/20 text-gray-500 mb-2"
            name="account"
            type="number"
            id="account"
            placeholder="Bank_Account_No"
            required
          />
          <Label htmlFor="salary">Salary</Label>
          <Input
            className="bg-white/20 text-gray-500 mb-2"
            name="salary"
            type="number"
            id="salary"
            placeholder="salary"
            required
          />
          <Label htmlFor="designation">Designation</Label>
          <Input
            className="bg-white/20 text-gray-500 mb-4"
            name="designation"
            type="text"
            id="designation"
            placeholder="example: Sales Assistant"
            required
          />
          <Button className="w-full mb-2 bg-primary-1">
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Register"
            )}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleGoogle();
            }}
            className="w-full bg-primary-2"
          >
            {" "}
            Continue with <FcGoogle /> Google
          </Button>
          <p className="text-center text-sm py-2 text-gray-700">
            Already Have An Account ?
            <Link className="text-primary-1 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
