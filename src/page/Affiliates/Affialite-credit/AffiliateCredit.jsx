import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import SuccessPendingButton from "../../../components/Button/SuccessPendingButton";
import { CancelBtns, EditBtns } from "../../../components/Button/GeneralButton";

const AffiliateCredit = () => {
  const tableData = [
    {
      _id: 1,
      id: "02345",
      name: "Mahedi",
      effectivDate: "2023-05-08",
      createdDate: "2023-05-08",
      amount: "$22",
      note: "Hi,",
      createNote: "Hello, Dear,",
      status: "pending",
    },
    {
      _id: 2,
      id: "02345",
      name: "Mahedi",
      effectivDate: "2023-05-08",
      createdDate: "2023-05-08",
      amount: "$22",
      note: "Hi,",
      createNote: "Hello, Dear,",
      status: "pending",
    },
    {
      _id: 3,
      id: "02345",
      name: "Mahedi",
      effectivDate: "2023-05-08",
      createdDate: "2023-05-08",
      amount: "$22",
      note: "Hi,",
      createNote: "Hello, Dear,",
      status: "success",
    },
    {
      _id: 4,
      id: "02345",
      name: "Mahedi",
      effectivDate: "2023-05-08",
      createdDate: "2023-05-08",
      amount: "$22",
      note: "Hi,",
      createNote: "Hello, Dear,",
      status: "pending",
    },
    {
      _id: 5,
      id: "02345",
      name: "Mahedi",
      effectivDate: "2023-05-08",
      createdDate: "2023-05-08",
      amount: "$22",
      note: "Hi,",
      createNote: "Hello, Dear,",
      status: "success",
    },
    {
      _id: 6,
      id: "02345",
      name: "Mahedi",
      effectivDate: "2023-05-08",
      createdDate: "2023-05-08",
      amount: "$22",
      note: "Hi,",
      createNote: "Hello, Dear,",
      status: "pending",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Affiliate Credit Transactions" }}>
        <Link to="/admin/add-credits">
          <BlackButton
            text={"Add Credits"}
            icon={"system-uicons:plus"}
            contentReverse={true}
          />
        </Link>
      </Headers>
      <div className="mt-[60px] py-[75px] px-[15px] bg-white rounded-[10px] max-[767px]:py-10 max-[576px]:py-5 max-[767px]:mt-10 max-[576px]:mt-5">
        <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[80px]">
                    Affiliate ID
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[110px]">
                    Affiliate Name
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[110px]">
                    Effective Date
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[90px]">
                    Created At
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[50px]">
                    Amount
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[50px]">
                    Note
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Credit Note
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[80px]">
                    Status
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data) => (
                <>
                  <tr key={data?._id}>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.id}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.name}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.effectivDate}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.createdDate}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.amount}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.note}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.createNote}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <SuccessPendingButton
                        text={data?.status}
                        bg={data?.status}
                      />
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <div className="flex gap-[10px]">
                        <EditBtns
                          text={"Edit"}
                          icon={"heroicons:pencil-solid"}
                        />
                        <CancelBtns
                          text={"Cancel"}
                          icon={"heroicons:pencil-solid"}
                        />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCredit;
