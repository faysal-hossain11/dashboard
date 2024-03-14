import { BlockBtn } from "../../../components/Button/MarcosBtn";

const BlockAdvertiser = () => {
  const tableData = [
    {
      id: 1,
      Advertisers: "SweepstakesADay - Win $5,000 - One Field ID",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-5">
        <p className="text-[18px] font-normal text-[#6A6A6A]">0 Blocked</p>
        <div className="w-[179px]">
          <BlockBtn text={"Block"} bg={"#F23B01"} />
        </div>
      </div>
      <div className="md:mt-10 mt-6 bg-[#FFF] rounded-[10px] px-2.5 py-[18px]">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="px-5 py-[18px] max-[576px]:p-3 text-left">
                  <input
                    className="h-[26px] w-[26px] text-[#FFFFFF]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[326px]">
                    Advertisers
                  </p>
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3 flex justify-end">
                  <p className="text-base font-medium text-white w-[140px] text-right">
                    Status
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data) => (
                <>
                  <tr key={data?._id}>
                    <td className="p-5 max-[576px]:p-3">
                      <input
                        className="h-[22px] w-[22px] text-[#6A6A6A]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.Advertisers}
                      </p>
                    </td>
                    <td className="py-5 pl-5 max-[576px]:p-3 flex justify-end">
                      <div className="w-[110px]">
                        <BlockBtn text={"Block"} bg={"#F23B01"} />
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

export default BlockAdvertiser;
