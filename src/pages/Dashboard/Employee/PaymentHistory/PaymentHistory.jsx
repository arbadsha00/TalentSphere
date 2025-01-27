import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AuthContext from "@/provider/AuthContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useContext } from "react";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // Fetch data with pagination using useInfiniteQuery
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["payments", user?.email],
      queryFn: async ({ pageParam = 1 }) => {
        const { data } = await axiosSecure(
          `/payments/paid/${user?.email}?page=${pageParam}&limit=5`
        );
        return data;
      },
      getNextPageParam: (lastPage) => {
        if (!lastPage.data || lastPage.data.length === 0) {
          return undefined; // Stop fetching if no data is returned
        }
        return lastPage.pagination.hasNextPage
          ? lastPage.pagination.currentPage + 1
          : undefined;
      },
    });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h3 className="text-primary-2 bg-sec text-center mb-3 text-2xl md:text-3xl font-bold">
        Payment History
      </h3>
      <Separator className="my-4" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Transaction Id</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Loop through the data from all pages */}
          {data.pages.flatMap((page) =>
            page.data.map((payment) => (
              <TableRow key={payment._id}>
                <TableCell className="font-medium">{payment.month}</TableCell>
                <TableCell>{payment.year}</TableCell>
                <TableCell>{payment.salary}</TableCell>
                <TableCell>{payment.transactionId}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {hasNextPage && (
        <div className="text-center mt-4">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="bg-primary-1"
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
