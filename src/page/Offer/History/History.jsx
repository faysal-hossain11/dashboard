import { Icon } from "@iconify/react";
import { IoCheckboxOutline } from "react-icons/io5";
import authorImg from "../../../assets/images/author-img.png";
import { Headers } from "../../../components/Headers/Headers";
import ActiveBadgeButton from "../../../components/Button/ActiveBadgeButton";

const History = () => {
  const tableData = [
    {
      _id: 1,
      id: "#846215",
      offer: "Business Marketing",
      date: "Jan 13, 2022",
      name: "James Adward",
      email: "adward21@gmail.com",
      status: "active",
    },
    {
      _id: 1,
      id: "#846215",
      offer: "Business Marketing",
      date: "Jan 13, 2022",
      name: "James Adward",
      email: "adward21@gmail.com",
      status: "inactive",
    },
    {
      _id: 1,
      id: "#846215",
      offer: "Business Marketing",
      date: "Jan 13, 2022",
      name: "James Adward",
      email: "adward21@gmail.com",
      status: "active",
    },
    {
      _id: 1,
      id: "#846215",
      offer: "Business Marketing",
      date: "Jan 13, 2022",
      name: "James Adward",
      email: "adward21@gmail.com",
      status: "active",
    },
    {
      _id: 1,
      id: "#846215",
      offer: "Business Marketing",
      date: "Jan 13, 2022",
      name: "James Adward",
      email: "adward21@gmail.com",
      status: "inactive",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Offer Import History" }}></Headers>
      <div className="mt-10 max-[576px]:mt-5">
        <p className="text-[#A4A4A4] rounded-[10px] max-w-[768px] py-2.5 px-3.5 bg-[#F5F5F5]">
          No history available.
        </p>
      </div>
      {/* table */}
      <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
        <table className=" table-auto w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid #A4A4A4" }}>
              <th className="pr-5">
                <IoCheckboxOutline className="text-tableColor mb-5 h-[26px] w-[26px]" />
              </th>
              <th className="pr-8">
                <div className="flex items-center gap-2 mb-5">
                  <p className="text-base font-medium text-tableColor">ID</p>
                  <Icon icon="fluent:arrow-sort-16-regular" />
                </div>
              </th>
              <th className="pr-8">
                <div className="mb-5">
                  <p className="text-base font-medium text-tableColor text-left">
                    Offer
                  </p>
                </div>
              </th>
              <th className="pr-8">
                <div className="flex items-center gap-2 mb-5">
                  <p className="text-base font-medium text-tableColor">Date</p>
                  <Icon icon="fluent:arrow-sort-16-regular" />
                </div>
              </th>
              <th className="pr-8">
                <div className="flex items-center gap-2 mb-5">
                  <p className="text-base font-medium text-tableColor">
                    Status
                  </p>
                  <Icon icon="fluent:arrow-sort-16-regular" />
                </div>
              </th>
              <th className="pr-8">
                <div className="mb-5">
                  <p className="text-base font-medium text-tableColor text-left">
                    Created by
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <>
                <tr key={data?._id}>
                  <td className="pr-5">
                    <IoCheckboxOutline className="text-tableColor h-[26px] w-[26px] mt-5" />
                  </td>
                  <td className="pr-8">
                    <p className="text-sm font-medium text-tableColor mt-5">
                      {data?.id}
                    </p>
                  </td>
                  <td className="pr-8">
                    <p className="text-sm font-medium text-tableColor mt-5">
                      {data?.offer}
                    </p>
                  </td>
                  <td className="pr-8">
                    <p className="text-sm font-medium text-tableColor mt-5">
                      {data?.date}
                    </p>
                  </td>
                  <td className="pr-8">
                    <ActiveBadgeButton
                      text={data?.status}
                      badged={data?.status}
                    />
                  </td>
                  <td className="pr-8">
                    <div className="flex gap-1.5 items-center mt-5">
                      <img
                        className="h-10 w-10 rounded-[40px]"
                        src={authorImg}
                        alt="Author Img"
                      />
                      <div>
                        <p className="text-sm text-medium text-primaryColor">
                          {data?.name}
                        </p>
                        <p className="font-normal text-xs text-tableColor mt-1">
                          {data?.email}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
