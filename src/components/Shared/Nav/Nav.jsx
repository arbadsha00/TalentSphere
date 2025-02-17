import { useContext } from "react";
import logo from "../../../assets/Logo-01.png";
import { RiFileInfoLine, RiHome2Line } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "@/provider/AuthContext";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { PiOfficeChair } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Nav = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-primary-1 text-base font-semibold flex items-center gap-1"
              : "text-base flex items-center gap-1"
          }
          to="/"
        >
          <RiHome2Line className="text-2xl md:text-base " />{" "}
          <span className="hidden md:flex">Home</span>
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-primary-1 text-base font-semibold flex items-center gap-1"
                  : "text-base flex items-center gap-1"
              }
              to="/dashboard"
            >
              <IoGridOutline className="text-2xl md:text-base " />{" "}
              <span className="hidden md:flex">Dashboard</span>
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-primary-1 text-base font-semibold flex items-center gap-1"
              : "text-base flex items-center gap-1"
          }
          to="/careers"
        >
          <PiOfficeChair className="text-2xl md:text-base " />

          <span className="hidden md:flex">Careers</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-primary-1 text-base font-semibold flex items-center gap-1"
              : "text-base flex items-center gap-1"
          }
          to="/contact"
        >
          <IoMailOutline className="text-2xl md:text-base " />
          <span className="hidden md:flex">Contact Us</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-primary-1 text-base font-semibold flex items-center gap-1"
              : "text-base flex items-center gap-1"
          }
          to="/about"
        >
          <RiFileInfoLine className="text-2xl md:text-base " />

          <span className="hidden md:flex">About Us</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto  bg-base-100/75   sticky top-0 z-40  my-6 backdrop-blur rounded-full">
      <div className="p-2 border-2 rounded-full  flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} width={50} height={50} alt="" />
          <h4 className="text-2xl hidden md:flex font-bold text-primary-2">
            TalentSphere
          </h4>
        </Link>
        <ul className="flex gap-10 md:gap-6">{links}</ul>
        <div>
          {!loading ? (
            user ? (
              <div>
                <Popover>
                  <PopoverTrigger className="flex items-center">
                    <Avatar>
                      <AvatarImage src={user?.photoURL} alt="userPhoto" />
                      {user?.displayName ? user.displayName[0] : "?"}
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit mr-5 mt-3">
                    <h3>{user?.displayName}</h3>
                    <Button onClick={() => logOut()} className=" bg-primary-2">
                      Logout{" "}
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <Link to="/login">
                <Button className="rounded-full text-lg bg-primary-2">
                  Login{" "}
                </Button>
              </Link>
            )
          ) : (
            <TbFidgetSpinner className="animate-spin text-primary-1 mr-2" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
