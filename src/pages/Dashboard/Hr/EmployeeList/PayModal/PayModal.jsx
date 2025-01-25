import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "react-toastify";

const PayModal = ({ isOpen, employee, closeModal }) => {
  const axiosSecure = useAxiosSecure();
  const handlePay = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const month = form.get("month");
    const year = form.get("year");
    const { name, email, salary } = employee || {};
    const paymentInfo = {
      name,
      email,
      salary: Number(salary),
      month,
      year,
      date: "N/A",
    };
    try {
      const result = await axiosSecure.post(`/payments/`, paymentInfo);
      if (result.data.insertedId) {
        toast.success("Payment added successfully");
        closeModal();
      }
    } catch (error) {
      if (error.response.status === 400) {
        // Display error message for bad request
        toast.error(
          error.response.data.message || "Payment request already exists."
        );
      }
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
            <DialogTitle className="text-center">Update Task</DialogTitle>
            <h3 className="text-center text-green-500 font-semibold text-2xl">
              Salary : ${employee?.salary}
            </h3>
          </DialogHeader>
          <form
            onSubmit={handlePay}
            className="flex flex-col items-center gap-2 "
          >
            <Select name="month" required>
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Month</SelectLabel>
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="june">June</SelectItem>
                  <SelectItem value="july">July</SelectItem>
                  <SelectItem value="august">August</SelectItem>
                  <SelectItem value="september">September</SelectItem>
                  <SelectItem value="october">October</SelectItem>
                  <SelectItem value="november">November</SelectItem>
                  <SelectItem value="december">December</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              min="0"
              step="1"
              required
              name="year"
              type="number"
              className=""
              placeholder="Enter year (e.g., 2024)"
            />

            <Button type="submit" className="bg-primary-1 w-full">
              Pay
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

export default PayModal;
