
import MenuItem from "./MenuItem";
import { FaListUl } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaListUl}
        label="All-Employee-List"
        address="all-employee-list"
      />
          <MenuItem icon={FaMoneyCheckDollar} label="Payroll" address="payroll" />
          <MenuItem icon={ MdMessage} label="Messages" address="messages" />
    </>
  );
};

export default AdminMenu;
