import { Icon } from "@iconify/react";
import BlackButton from "../../../components/Button/BlackButton";
import SelectFiled from "../../../components/InputField/SelectFiled";
import AddButton from "../../../components/Button/AddButton";
import BlockSubIdsModal from "./BlockSubIdsModal";

const BlockSubids = () => {
  const tableData = [
    {
      id: 1,
      offer: "SweepstakesADay - Win $5,000 - One Field ID",
      affiPera: "aff_sub2",
      value: "V01",
      blockedDate: "23-07-2023",
      status: "active",
    },
  ];
  return (
    <>
      <button onClick={() => document.getElementById("blockModal").showModal()}>
        <BlackButton
          text={"Add New"}
          icon={"ic:twotone-plus"}
          contentReverse={true}
        />
      </button>
      <BlockSubIdsModal />
      <div className="mt-10 md:p-5 p-3 bg-white rounded-[5px]">
        <SelectFiled
          bg={"#FAFAFA"}
          name={"name"}
          select={[
            { value: "Select Offer", option: "Select Offer" },
            { value: "Select Offer", option: "Select Offer" },
          ]}
        />
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[50px]">
                    <Icon
                      className="h-[26px] w-[26px] text-[#FFFFFF]"
                      icon="ion:checkbox-outline"
                    />
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Offer
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[170px]">
                    Sub-Affiliate Parameter
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Value
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Blocked At
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Status
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Action
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
                      <p className="text-sm font-normal text-primaryColor text-left w-[260px]">
                        {data?.offer}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.affiPera}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.value}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.blockedDate}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.status}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <div className="w-[140px]">
                        <AddButton text={"Block Access"} varient={"red"} />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BlockSubids;
