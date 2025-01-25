import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UpdateModal = ({ isOpen, employee, closeModal, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const amount = form.get("amount");
      const updatedSalary = Number(amount);
      console.log(updatedSalary);
    if (updatedSalary > employee?.salary) {
      const result = await axiosSecure.patch(`/users/salary/${employee?._id}`, {
        updatedSalary,
      });
      if (result.data.modifiedCount) {
        toast.success("Salary Updated successfully");
        refetch();
        closeModal();
      }
    } else {
      toast.error("New salary must be greater than the current salary.");
    }
  };
  return (
    <div>
      <Dialog open={isOpen}>
        <DialogContent
          className="sm:max-w-[425px]"
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="text-center">Update Salary</DialogTitle>
            <h3 className="text-center text-secondary-1 font-semibold text-xl">
              Current Salary : ${employee?.salary}
            </h3>
          </DialogHeader>
          <form
            onSubmit={handleUpdate}
            className="flex flex-col items-center gap-2 "
          >
            <Input
              min="0"
              step="1"
              required
              name="amount"
              type="number"
              className=""
              placeholder="Enter new salary"
            />

            <Button type="submit" className="bg-primary-1 w-full">
              Update
            </Button>
          </form>
          <Button onClick={closeModal} className="bg-primary-2 w-full">
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateModal;
