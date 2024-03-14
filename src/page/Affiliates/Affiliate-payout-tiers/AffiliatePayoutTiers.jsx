import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";

const AffiliatePayoutTiers = () => {
  const tableData = [
    {
      _id: 1,
      id: "04",
      name: "Mahedi",
      affiliate: "00",
      date: "2023-05-08",
      description: "Hello, Dear",
    },
    {
      _id: 2,
      id: "04",
      name: "Mahedi",
      affiliate: "00",
      date: "2023-05-08",
      description: "Hello, Dear",
    },
    {
      _id: 3,
      id: "04",
      name: "Mahedi",
      affiliate: "00",
      date: "2023-05-08",
      description: "Hello, Dear",
    },
    {
      _id: 4,
      id: "04",
      name: "Mahedi",
      affiliate: "00",
      date: "2023-05-08",
      description: "Hello, Dear",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Payout Group" }}>
        <Link to="/admin/create-payout-tier">
          <BlackButton
            text={"Add New"}
            icon={"system-uicons:plus"}
            contentReverse={true}
          />
        </Link>
      </Headers>
      <div className="px-[15px] xl:py-[75px] md:py-10 py-5 xl:mt-[60px] md:mt-10 mt-10 rounded-[10px] bg-white">
        <div className="mt-5">
          <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-primaryColor rounded-[10px]">
                  <th className="px-5 py-[18px] max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[140px]">
                      Level
                    </p>
                  </th>
                  <th className="px-5 py-[18px] max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[140px]">
                      Payout Tier Name
                    </p>
                  </th>
                  <th className="px-5 py-[18px] max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[140px]">
                      Affiliate
                    </p>
                  </th>
                  <th className="px-5 py-[18px] max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[140px]">
                      Created At
                    </p>
                  </th>
                  <th className="px-5 py-[18px] max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[200px]">
                      Description
                    </p>
                  </th>
                  <th className="px-5 py-[18px] max-[576px]:p-3">
                    <p className="text-base font-medium text-white w-[140px] text-center">
                      Action
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data) => (
                  <>
                    <tr key={data?._id}>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.id}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.name}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.affiliate}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.date}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.description}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <div className="flex gap-[10px]">
                          <button
                            style={{ background: "rgba(3, 8, 19, 0.10)" }}
                            className="py-1 px-2 rounded-[10px] w-[60px] h-[30px]"
                          >
                            <p className="font-normal text-sm text-primaryColor">
                              Edit
                            </p>
                          </button>
                          <button className="px-2 rounded-[10px] w-[60px] flex justify-center">
                            <Icon
                              className="text-[25px] text-[#000000]"
                              icon="mdi:eye"
                            />
                          </button>
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
    </div>
  );
};

export default AffiliatePayoutTiers;
