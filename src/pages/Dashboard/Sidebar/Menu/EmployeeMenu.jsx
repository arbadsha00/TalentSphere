
import MenuItem from './MenuItem';
import { FaSheetPlastic } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
const EmployeeMenu = () => {
    return (
        <>
      <MenuItem
        icon={FaSheetPlastic}
        label='Work Sheet'
        address='work-sheet'
      />
      <MenuItem
        icon={FaMoneyCheckAlt}
        label='Payment History'
        address='payment-history'
      />
    </>
    );
};

export default EmployeeMenu;