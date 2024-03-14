import AddButton from "../../../components/Button/AddButton";
import BlackButton from "../../../components/Button/BlackButton";
import OutletButton from "../../../components/Button/OutletButton";
import { Headers } from "../../../components/Headers/Headers";
import AffiAccountusersModal from "./AffiAccountusersModal";

const AffiAccountUsers = () => {
  const tableData = [
    {
      id: 1,
      name: "Max Test",
      title: "Max Test",
      email: "rifat12@gmail.com",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Account Users" }}>
        <button
          onClick={() => document.getElementById("userModal").showModal()}
        >
          <BlackButton
            text={"Add"}
            icon={"ic:twotone-plus"}
            contentReverse={true}
          />
        </button>
        <AffiAccountusersModal />
      </Headers>
      <div className="lg:mt-[60px] md:mt-10 mt-5 px-[15px] md:py-10 py-5 bg-[#FFF] rounded-[10px]">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Name
                  </p>
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Title
                  </p>
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Email
                  </p>
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
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
                        {data?.name}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.title}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.email}
                      </p>
                    </td>
                    <td className="p-5 max-[576px]:p-3 flex gap-[13px] items-center">
                      <div className="w-[82px]">
                        <AddButton text={"Login"} varient={"black"} />
                      </div>
                      <div className="w-[71px]">
                        <OutletButton text={"Edit"} />
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

export default AffiAccountUsers;
