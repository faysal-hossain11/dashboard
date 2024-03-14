import BlackButton from "../../../components/Button/BlackButton";
import { Headers } from "../../../components/Headers/Headers";

const AccountUsers = () => {
  const tableData = [
    {
      id: 1,
      name: "Mahedi",
      title: "Max Test",
      email: "rifat12@gmail.com",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Account Users" }}>
        <BlackButton
          text={"Add"}
          icon={"ic:twotone-plus"}
          contentReverse={true}
        />
      </Headers>
      <div className="xl:mt-[60px] md:mt-10 mt-5 rounded-[10px] bg-white px-[15px] md:py-10 py-5">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[80px]">
                    Name
                  </p>
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[140px]">
                    Title
                  </p>
                </th>
                <th className="px-5 py-[18px] max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Email
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

export default AccountUsers;
