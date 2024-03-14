import BlackButton from "../../../components/Button/BlackButton";
import { Headers } from "../../../components/Headers/Headers";
import ActiveBadgeButton from "../../../components/Button/ActiveBadgeButton";
import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";

const manageOfferAddSourses = [
  {
    id: "01",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "02",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "inactive",
    syncstatus: "disable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "03",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "04",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "05",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "06",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "07",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "08",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "09",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
  {
    id: "10",
    source: "Source Name",
    status: "active",
    linked: "Rakib Shekh",
    import: "active",
    syncstatus: "enable",
    lastsync: "0 minutes Ago",
    action: "posback Code",
  },
];

const ManageOfferAddSourses = () => {
  return (
    <div>
      <div className="mb-9">
        <Headers text={{ heading: "Manage Offer Sources Add New Source" }}>
          <BlackButton
            text={"Add New Source"}
            icon={"material-symbols:close"}
          />
        </Headers>
      </div>
      <div className="py-[25px] px-[15px] bg-white rounded-[10px]">
        <div className=" overflow-x-auto">
          <table className=" table-auto w-full">
            <thead>
              <tr className=" bg-primaryColor">
                <th className=" text-white py-3 text-left pl-3">ID</th>
                <th className=" text-white py-3 text-left">Source</th>
                <th className=" text-white py-3 text-left">Status</th>
                <th className=" text-white py-3 text-left">
                  Linked Advertiser
                </th>
                <th className=" text-white py-3 text-left">Auto Import</th>
                <th className=" text-white py-3 text-left">Auto Sync Status</th>
                <th className=" text-white py-3 text-left">Last Sync</th>
                <th className=" text-white py-3 text-left pl-[98px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {manageOfferAddSourses.map((item) => (
                <tr key={item.id}>
                  <td className="pl-3 pt-3">{item.id}</td>
                  <td className=" pt-3">{item.source}</td>
                  <td>
                    <ActiveBadgeButton
                      text={item?.status}
                      badged={item?.status}
                    />
                  </td>
                  <td className=" pt-3">{item.linked}</td>
                  <td>
                    <ActiveBadgeButton
                      text={item?.import}
                      badged={item?.import}
                    />
                  </td>
                  <td className="">
                    <ActiveBadgeButton
                      text={item?.syncstatus}
                      badged={item?.syncstatus}
                    />
                  </td>
                  <td className=" text-primaryColor font-primaryFont text-[14px] font-normal pt-3">
                    {item.lastsync}
                  </td>
                  <td className="flex items-center justify-end pr-5 gap-[10px] py-4">
                    <PostBackDeleteButton
                      text={item?.action}
                      icon={"ion:code-slash"}
                      bg={"postback"}
                    />
                    <PostBackDeleteButton
                      text={"Edit"}
                      icon={"mdi:pencil"}
                      bg={"edit"}
                    />
                    <PostBackDeleteButton
                      icon={"iconamoon:trash-duotone"}
                      bg={"delete"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOfferAddSourses;
