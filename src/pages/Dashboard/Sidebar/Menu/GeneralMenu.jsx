import MenuItem from "./MenuItem";
import { FaCircleUser } from "react-icons/fa6";

const GeneralMenu = () => {
  return (
    <>
      <MenuItem icon={FaCircleUser} label="Profile" address="profile" />
    </>
  );
};

export default GeneralMenu;
