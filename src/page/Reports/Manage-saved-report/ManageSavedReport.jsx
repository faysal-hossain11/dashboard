import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";
import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";

const ManageSavedReport = () => {
  const tableData = [
    {
      id: 1,
      name: "Food & Drink",
      date: "02.06.2022",
    },
    {
      id: 2,
      name: "Food & Drink",
      date: "02.06.2022",
    },
    {
      id: 3,
      name: "Food & Drink",
      date: "02.06.2022",
    },
    {
      id: 4,
      name: "Food & Drink",
      date: "02.06.2022",
    },
    {
      id: 5,
      name: "Food & Drink",
      date: "02.06.2022",
    },
    {
      id: 6,
      name: "Food & Drink",
      date: "02.06.2022",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Manage Saved Report" }}></Headers>
      <div className="mt-10 max-[576px]:mt-5 overflow-x-auto px-[15px] py-[28px] bg-white rounded-[5px]">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primaryColor rounded-[10px]">
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[100px]">
                  <Icon
                    className="h-[26px] w-[26px] text-[#FFFFFF]"
                    icon="ion:checkbox-outline"
                  />
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[120px]">
                  Report Name
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[100px]">
                  Created At
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[100px]">
                  Edit
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <>
                <tr key={data?.id}>
                  <td className="p-5 max-[576px]:p-3">
                    <Icon
                      className="h-[26px] w-[26px] text-tableColor"
                      icon="ion:checkbox-outline"
                    />
                  </td>
                  <td className="p-5 max-[576px]:p-3">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.name}
                    </p>
                  </td>
                  <td className="p-5 max-[576px]:p-3">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.date}
                    </p>
                  </td>
                  <td className="p-5 max-[576px]:p-3">
                    <PostBackDeleteButton
                      text={"Delete"}
                      icon={"ei:trash"}
                      bg={"delete"}
                    />
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

export default ManageSavedReport;
