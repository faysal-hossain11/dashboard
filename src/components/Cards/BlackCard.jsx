import { BiSearchAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import offer from "../../assets/images/offer.png";
import Advertiser from "../../assets/images/advatiser.png";
import Affiliate from "../../assets/images/affiliate.png";
import Postback from "../../assets/images/postback.png";

const BlackCard = () => {
  return (
    <div className=" bg-primaryColor rounded-[10px] md:h-[300px] md:p-[30px] p-[15px]">
      <div className="flex items-center bg-[#2A3347] py-[10px] px-[20px] rounded-[10px] mb-10 gap-[20px]">
        <div className="">
          <BiSearchAlt2 className="text-[#9ba7bc]" />
        </div>
        <input type="search" className="bg-[#2A3347] outline-none text-white" />
      </div>
      <div className="md:flex justify-between ">
        <div>
          <div className="flex items-center justify-between gap-10 mb-5">
            <div className="flex items-center gap-[10px]">
              <div>
                <img src={offer} alt="offer-image" />
              </div>
              <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                Create Offer
              </p>
            </div>
            <div>
              <FaPlus className="text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10 mb-5">
            <div className="flex items-center gap-[10px]">
              <div>
                <img src={Affiliate} alt="offer-image" />
              </div>
              <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                Create Affiliate
              </p>
            </div>
            <div>
              <FaPlus className="text-white" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-10 mb-5">
            <div className="flex items-center gap-[10px]">
              <div>
                <img src={Advertiser} alt="offer-image" />
              </div>
              <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                Create Advertiser
              </p>
            </div>
            <div>
              <FaPlus className="text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10 mb-5">
            <div className="flex items-center gap-[10px]">
              <div>
                <img src={Postback} alt="offer-image" />
              </div>
              <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                Get Global Postback URL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackCard;