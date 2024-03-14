import { Icon } from "@iconify/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CreativeManagerModal from "./CreativeManagerModal";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import GrayButton from "../../../components/Button/GrayButton";
import ActiveBadgeButton from "../../../components/Button/ActiveBadgeButton";

const creativeManage = [
  {
    id: 1,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 2,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 3,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 4,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 5,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 6,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 7,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 8,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 9,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
  {
    id: 10,
    type: "Image Banner",
    name: "Test",
    offerName: "Offer name here",
    uploadBy: "Admin",
    status: "active",
    bannerSize: 200 * 200,
    fileSize: "1.5kb",
    uploadTime: "Today at 8:49pm",
    action: <BsThreeDotsVertical />,
  },
];

const CreativeManager = () => {
  return (
    <div>
      <div className="md:mb-[30px] mb-5">
        <Headers text={{ heading: "Offer Creatives" }}>
          <button
            onClick={() =>
              document.getElementById("creative-modal").showModal()
            }
          >
            <BlackButton
              text={"Upload a Creative"}
              icon={"ep:upload-filled"}
              contentReverse={true}
            />
          </button>
          <CreativeManagerModal />
        </Headers>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[10px]">
        <div>
          <select className="select w-full max-w-xs outline-none focus:outline-none outline-offset-0 ">
            <option selected>
              <span className=" font-primaryFont text-[16px] text-[#6A6A6A] font-normal">
                Status:
              </span>
              Pending
              <Icon icon="pepicons-pop:angle-down" />
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
        <div>
          <select className="select w-full max-w-xs outline-none focus:outline-none outline-offset-0 ">
            <option selected>
              Filter by Type
              <Icon icon="pepicons-pop:angle-down" />
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
        <div>
          <select className="select w-full max-w-xs outline-none focus:outline-none outline-offset-0 ">
            <option selected>
              Filter by Offer
              <Icon icon="pepicons-pop:angle-down" />
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
      </div>
      <div className="bg-white mt-[42px] px-5 lg:px-0">
        <div className="md:flex items-center justify-between pt-[26px] pb-[35px] px-4">
          <div className="mb-5 md:mb-0">
            <h3 className=" font-primaryFont text-primaryColor text-[20px] font-medium">
              1 Creatives
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <GrayButton icon={"ion:reload-circle"} />
            <GrayButton icon={"tabler:git-compare"} />
            <GrayButton icon={"ion:expand"} />
          </div>
        </div>
      </div>
      <div>
        <div className=" overflow-x-auto bg-white px-4">
          <table className=" table-auto w-full">
            <thead>
              <tr className=" bg-primaryColor px-3">
                <th className="flex items-center gap-2 text-white pl-5  py-3 pr-[47px]">
                  ID
                  <Icon icon="fluent:arrow-sort-16-filled" />
                </th>
                <th className="text-white pr-[47px]">Creative type</th>
                <th className="text-white pr-[47px]">Name</th>
                <th className="text-white pr-[100px]">Offer name</th>
                <th className="text-white pr-[47px]">Uploaded By</th>
                <th className="text-white pr-[10px]">Status</th>
                <th className="text-white pr-[47px] pl-[37px]">Banner Size</th>
                <th className="text-white pr-[47px]">File Size</th>
                <th className="text-white pr-[47px]">Uploaded At</th>
                <th className="text-white pr-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {creativeManage.map((item) => (
                <tr key={item.id}>
                  <td className="pl-[20px]">{item.id}</td>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.offerName}</td>
                  <td>{item.uploadBy}</td>
                  <td>
                    <ActiveBadgeButton
                      text={item?.status}
                      badged={item?.status}
                    />
                  </td>
                  <td className="pl-[37px] pt-4">{item.bannerSize}</td>
                  <td>{item.fileSize}</td>
                  <td>{item.uploadTime}</td>
                  <td>
                    <details className="dropdown">
                      {/* <summary className=" text-primaryColor cursor-pointer"> {data.actionsIcon}</summary> */}
                      <summary className="m-1 flex items-center gap-[10px] pl-4 text-primaryColor text-[16px] font-primaryFont cursor-pointer">
                        {" "}
                        {item.action}
                      </summary>
                      <ul className="w-[165px] shadow menu dropdown-content z-[1] bg-base-100 rounded-box absolute left-[-40px]">
                        <li>
                          <a className="text-[#6A6A6A] font-primaryFont text-[14px]">
                            <Icon icon="heroicons:signal-20-solid" />
                            Live Status
                          </a>
                        </li>
                        <li>
                          <a className="text-[#6A6A6A] font-primaryFont text-[14px]">
                            <Icon icon="ion:duplicate" />
                            Duplicate
                          </a>
                        </li>
                        <li>
                          <a className="text-[#6A6A6A] font-primaryFont text-[14px]">
                            <Icon icon="ion:bag-check" />
                            Check Report
                          </a>
                        </li>
                      </ul>
                    </details>
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

export default CreativeManager;
