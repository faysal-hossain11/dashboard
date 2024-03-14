// react icon
import { IoCheckboxOutline } from "react-icons/io5";
import { BsArrowDownUp, BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Pizza from "../../assets/images/pizza.png";
import { Icon } from "@iconify/react";
// import TableItem from '../TableItems/TableItem';

const tableData = [
  {
    checkIcon: <input type="checkbox" />,
    id: "01",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "02",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "03",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "04",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "05",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "06",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "07",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "08",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
  {
    checkIcon: <input type="checkbox" />,
    id: "09",
    offerImg: <img src={Pizza} alt="" />,
    offerData: "TestofferNetId232ds232new",
    advertiser: "Max",
    category: "Category",
    countris: "BD",
    currency: "USD",
    revenue: "10.2",
    payout: "10.2",
    cr: 52.634,
    actionsIcon: <BsThreeDotsVertical />,
  },
];
const Table = () => {
  return (
    <div>
      <div className="mb-[60px] overflow-x-auto">
        <table className=" table-auto w-full">
          <thead>
            <tr className=" bg-primaryColor py-5 rounded-md ">
              <th className="px-6 py-5 text-white ">
                <IoCheckboxOutline />
              </th>
              <th className="pr-9 ">
                <p className="flex items-center gap-2 justify-center text-white">
                  ID <BsArrowDownUp />
                </p>
              </th>
              <th className="text-center pr-9">
                <p className="flex items-center gap-2 justify-center text-white">
                  Offer <BsArrowDownUp />
                </p>
              </th>
              <th className="pr-12">
                <p className="flex items-center gap-2 text-white">
                  Advertisers <BsArrowDownUp />
                </p>
              </th>
              <th className=" pr-12">
                <p className="flex items-center gap-2 text-white">
                  Category <BsArrowDownUp />
                </p>
              </th>
              <th className="text-white pr-12">Countries</th>
              <th className="text-white pr-12">Currency</th>
              <th className="text-white pr-12">Revenue</th>
              <th className="text-white pr-12">Payout</th>
              <th className="pr-12">
                <p className="flex items-center gap-2 text-white">
                  CR <BsArrowDownUp />
                </p>
              </th>
              <th className="text-white pr-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id} className="">
                <td>
                  <p className="pl-5">{data.checkIcon}</p>
                </td>
                <td>{data.id}</td>
                <td className="flex items-center gap-9 pr-9 pt-5">
                  {data.offerImg}
                  {data.offerData}
                </td>
                <td>
                  <p className="pl-9">{data.advertiser}</p>
                </td>
                <td>{data.category}</td>
                <td>{data.countris}</td>
                <td>{data.currency}</td>
                <td>
                  <p className="flex items-center gap-4">
                    {data.revenue}
                    <span className="p-[6px] bg-[#DDDFE2] rounded-[15px]">
                      RPA
                    </span>
                  </p>
                </td>
                <td>
                  <p className="flex items-center gap-4">
                    {data.payout}
                    <span className="p-[6px] bg-[#DDDFE2] rounded-[15px]">
                      CPA
                    </span>
                  </p>
                </td>
                <td>{data.cr}</td>
                <td>
                  <details className="dropdown">
                    {/* <summary className=" text-primaryColor cursor-pointer"> {data.actionsIcon}</summary> */}
                    <summary className="m-1 flex items-center gap-[10px] p-[15px]  text-primaryColor text-[16px] font-primaryFont cursor-pointer">
                      {" "}
                      {data.actionsIcon}
                    </summary>
                    <ul className=" shadow menu dropdown-content z-[1] rounded-box absolute left-[-40px]  bg-white w-[150px] ">
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
            {/* <tr>
                            <td><input type="checkbox" /></td>
                            <td>01</td>
                            <td className='flex items-center gap-12'>
                                <img src={Pizza} alt="" />
                                <p>TestofferNetId232ds232new</p>
                            </td>
                            <td>Max</td>
                            <td>Chocolate</td>
                            <td>BD</td>
                            <td>USD</td>
                            <td className=''>
                                <p className='flex items-center gap-4'>10.2 <span className='p-[6px] bg-secondaryColor rounded-[15px]'>RPA</span></p>
                            </td>
                            <td className=''>
                                <p className='flex items-center gap-4'>10.2 <span className='p-[6px] bg-secondaryColor rounded-[15px]'>CPA</span></p>
                            </td>
                            <td>52.634</td>
                            <td><BsThreeDotsVertical /></td>
                        </tr> */}
          </tbody>
        </table>
      </div>
      <div className="md:flex justify-between">
        <div className=" basis-[33.3%]"></div>
        <div className="flex items-center justify-center gap-6 basis-[33.3%] mb-5 md:mb-0">
          <div>
            <button className="flex items-center gap-[10px] border-2 border-primaryColor rounded-[10px] font-secondaryFont text-primaryColor font-bold text-[16px] px-5 py-3">
              <FaAngleLeft />
              Previous
            </button>
          </div>
          <div>
            <button className=" bg-primaryColor text-white font-secondaryFont font-bold text-[16px] flex items-center gap-[10px] py-3 px-5 rounded-[10px]">
              Next
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className=" basis-[33.3%] flex items-center md:justify-end justify-center">
          <div className="flex items-center gap-[15px]">
            <p className=" font-primaryFont text-[14px] text-primaryColor font-normal">
              Page
            </p>
            <button className="flex items-center gap-1 border-2 border-primaryColor py-[10px] px-[14px] rounded-[10px]">
              2<BsArrowDownUp />
            </button>
            <p className=" font-primaryFont text-[14px] text-primaryColor font-normal">
              of 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
