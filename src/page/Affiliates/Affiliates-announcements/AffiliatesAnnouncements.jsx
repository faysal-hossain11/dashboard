import { Icon } from "@iconify/react";
import announceImg from "../../../../src/assets/images/affilaite-announce-img.png";
import UploadBannerModal from "./UploadBannerModal";
import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import BlackButton from "../../../components/Button/BlackButton";

const AffiliatesAnnouncements = () => {
  const tableData = [
    {
      id: 1,
      announce: "Food & Drink",
      publish: "02.06.2022",
      expired: "02.06.2022",
    },
    {
      id: 2,
      announce: "Food & Drink",
      publish: "02.06.2022",
      expired: "02.06.2022",
    },
    {
      id: 3,
      announce: "Food & Drink",
      publish: "02.06.2022",
      expired: "02.06.2022",
    },
    {
      id: 4,
      announce: "Food & Drink",
      publish: "02.06.2022",
      expired: "02.06.2022",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Affiliates Announcements" }}></Headers>
      <div className="mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5 bg-white rounded-[10px]">
        <div className="pl-5 pt-5 pr-[14px] pb-10 max-[576px]:p-3 flex justify-between items-center max-[576px]:flex-col max-[576px]:gap-3">
          <MiddleHeader heading={"Featured Banner"} />
          <button
            onClick={() => document.getElementById("banner-modal").showModal()}
          >
            <BlackButton
              text={"Upload Banner"}
              icon={"bi:cloud-upload-fill"}
              contentReverse={true}
            />
          </button>
          <UploadBannerModal />
        </div>
        <img
          style={{ borderRadius: "0px 0px 10px 10px" }}
          className="w-full h-[352px] pb-[13px] max-[767px]:h-[200px] max-[576px]:h-full"
          src={announceImg}
          alt="Announce Img"
        />
      </div>
      <div className="px-4 py-[30px] mt-[60px] bg-white rounded-[5px] max-[767px]:mt-10 max-[576px]:mt-5 max-[414px]:p-2">
        <div className="pl-5 pt-5 pr-[14px] pb-10 flex justify-between items-center max-[767px]:flex-col max-[767px]:gap-4 max-[576px]:p-2">
          <MiddleHeader heading={"Featured Banner"} />
          <Link to="/admin/affiliate/add-new-document">
            <BlackButton
              text={"Add New Documents"}
              icon={"heroicons:plus-20-solid"}
              contentReverse={true}
            />
          </Link>
        </div>
        <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-left w-[20px]">
                    <Icon
                      className="text-[26px] text-[#FFFFFF]"
                      icon="radix-icons:checkbox"
                    />
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Announcement
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Published At
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Expires At
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Visibility
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data) => (
                <>
                  <tr key={data?.id}>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-left">
                        <Icon
                          className="text-[26px] text-[#A4A4A4]"
                          icon="radix-icons:checkbox"
                        />
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.announce}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.publish}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.expired}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <Icon
                        className="text-[40px] text-[#000000]"
                        icon="mdi:eye"
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

export default AffiliatesAnnouncements;
