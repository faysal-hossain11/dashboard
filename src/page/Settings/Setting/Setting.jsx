import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import BlackButton from "../../../components/Button/BlackButton";
import { Headers } from "../../../components/Headers/Headers";
import { OutletBtn } from "../../../components/Button/GeneralButton";
import SuccessPendingButton from "../../../components/Button/SuccessPendingButton";
import SearchFieldBorder from "../../../components/InputField/SearchFieldBorder";

const Setting = () => {
  const tableData = [
    {
      id: 1,
      name: "Dipjol Khan",
      email: "mominul@momingmail.com",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Manage Employees" }}>
        <Link to="/admin/create-employee">
          <BlackButton
            text={"Create Employee"}
            icon={"gridicons:user-add"}
            contentReverse={"contentReverse"}
          />
        </Link>
      </Headers>
      <div className="flex gap-[15px] items-center mt-5 max-[414px]:flex-col">
        <div className="w-[338px] max-[414px]:w-full relative">
          <SearchFieldBorder placeholder={"Search ..."} name={"name"} />
        </div>
        <BlackButton text={"Search"} />
      </div>
      <div className="mt-[64px] pb-5 bg-white rounded-[10px] max-[767px]:mt-10 max-[576px]:mt-5">
        <div className="py-5 flex justify-end">
          <OutletBtn
            text={"Show Only Active Users"}
            icon={"iconamoon:arrow-down-2-fill"}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[80px]">
                    Name
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[110px]">
                    Email
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[140px]">
                    Permissions
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[90px]">
                    Status
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Edit Profile
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data) => (
                <>
                  <tr key={data?.id}>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.name}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.email}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <SuccessPendingButton
                        text={"Primary Account"}
                        bg={"success"}
                      />
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-primaryColor font-normal">
                          Active
                        </span>
                        <div className="h-[10px] w-[10px] rounded-[10px] bg-[#38E25D]"></div>
                      </div>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <Icon
                        className="text-[30px] text-primaryColor"
                        icon="eva:edit-2-fill"
                      />
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

export default Setting;
