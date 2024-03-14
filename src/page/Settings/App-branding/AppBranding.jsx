import FaviconImg from "../../../assets/images/her1.png";
import BgImg from "../../../assets/images/her4.png";
import ConpanyOneImg from "../../../assets/images/hex2.png";
import ConpanyTwoImg from "../../../assets/images/hex3.png";
import { Headers } from "../../../components/Headers/Headers";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";
const AppBranding = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className=" font-secondaryFont text-primaryColor font-bold text-[32px] "></h2>
        <Headers text={{ heading: "App Branding" }}></Headers>
      </div>
      <div className="bg-white rounded-[10px] py-[40px] 2xl:px-[130px] md:px-16 px-5">
        <div className="mb-[45]">
          <h3 className=" text-primaryColor font-primaryFont text-[20px] font-semibold mb-[45px] text-center">
            Brand Configuration
          </h3>
        </div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-6">
          <InputField
            label={"Company Name"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Company Short Name"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Website"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Public Contact Email"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Billing Email"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Notification Email"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Postal Address"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <SelectFiled
            label={"Dashboard Theme"}
            size={"base"}
            bg={"#F5F5F5"}
            name={"name"}
            select={[
              { value: "Menu Top", option: "Menu Top" },
              { value: "Menu Top", option: "Menu Top" },
              { value: "Menu Top", option: "Menu Top" },
            ]}
          />
          <div>
            <div className="mb-3">
              <label
                htmlFor=""
                className=" font-primaryFont text-primaryColor font-medium text-[16px]"
              >
                Base Theme Color
              </label>
            </div>
            <input
              type="color"
              placeholder="www.examopeldkd"
              className="w-full h-[45px]"
            />
          </div>
          <SelectFiled
            label={"Base Foreground Color"}
            size={"base"}
            bg={"#F5F5F5"}
            name={"name"}
            select={[
              { value: "Light Color", option: "Light Color" },
              { value: "Menu Top", option: "Menu Top" },
              { value: "Menu Top", option: "Menu Top" },
            ]}
          />
          <InputField
            label={"Facebook Page"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Twitter Profile"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Linkdin Profile"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Google+ Profile"}
            bg={"#F5F5F5"}
            size={"base"}
            placeholder={"www.examopeldkd"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <div>
            <InputField
              label={"Custom Logout URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="text-[#A4A4A4] text-[14px] font-primaryFont font-normal mt-[10px]">
              URL redirect when users logout
            </p>
          </div>
          <div>
            <InputField
              label={"Terms & Conditions URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="text-[#A4A4A4] text-[14px] font-primaryFont font-normal mt-[10px]">
              URL access your company terms & conditions
            </p>
          </div>
          <div>
            <InputField
              label={"Privacy Policy URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="text-[#A4A4A4] text-[14px] font-primaryFont font-normal mt-[10px]">
              URL access your company Privacy Policy
            </p>
          </div>
          <div>
            <InputField
              label={"FAQ URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="text-[#A4A4A4] text-[14px] font-primaryFont font-normal mt-[10px]">
              URL access your company FAQ
            </p>
          </div>
          <div>
            <InputField
              label={"Payment FAQ URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="text-[#A4A4A4] text-[14px] font-primaryFont font-normal mt-[10px]">
              URL access your company Payment FAQ
            </p>
          </div>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-5 mt-8">
            <div className="w-[240px]">
              <h3 className="font-primaryFont text-primaryColor font-medium text-[16px] mb-[10px]">
                Favicon
              </h3>
              <div className="app_banding_main">
                <img src={FaviconImg} alt="faviconimg" />
                <button
                  id="app_banding_btn"
                  style={{
                    border: "0.5px solid #FFF",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="px-[10px] py-[3px] bg-transparent rounded-[10px] h-[22px] w-[59px] flex items-center justify-center absolute top-1/2 left-1/2 opacity-0 duration-300"
                >
                  <span className="font-normal text-xs text-[#FFF]">
                    Change
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[240px]">
              <h3 className=" font-primaryFont text-primaryColor font-medium text-[16px] mb-[10px]">
                Company Logo
              </h3>
              <div className="app_banding_main flex justify-center border border-[#ddd] rounded-[10px] py-[10px]">
                <img src={ConpanyOneImg} alt="conpanyimg" />
                <button
                  id="app_banding_btn"
                  style={{
                    border: "0.5px solid #FFF",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="px-[10px] py-[3px] bg-transparent rounded-[10px] h-[22px] w-[59px] flex items-center justify-center absolute top-1/2 left-1/2 opacity-0 duration-300"
                >
                  <span className="font-normal text-xs text-[#FFF]">
                    Change
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[240px]">
              <h3 className=" font-primaryFont text-primaryColor font-medium text-[16px] mb-[10px]">
                Company Icon{" "}
              </h3>
              <div className="app_banding_main flex justify-center border border-[#ddd] rounded-[10px] py-[10px]">
                <img src={ConpanyTwoImg} alt="companyi" />
                <button
                  id="app_banding_btn"
                  style={{
                    border: "0.5px solid #FFF",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="px-[10px] py-[3px] bg-transparent rounded-[10px] h-[22px] w-[59px] flex items-center justify-center absolute top-1/2 left-1/2 opacity-0 duration-300"
                >
                  <span className="font-normal text-xs text-[#FFF]">
                    Change
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[240px]">
              <h3 className="font-primaryFont text-primaryColor font-medium text-[16px] mb-[10px]">
                Background Image
              </h3>
              <div className="app_banding_main">
                <img src={BgImg} alt="BgImg" />
                <button
                  id="app_banding_btn"
                  style={{
                    border: "0.5px solid #FFF",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="px-[10px] py-[3px] bg-transparent rounded-[10px] h-[22px] w-[59px] flex items-center justify-center absolute top-1/2 left-1/2 opacity-0 duration-300"
                >
                  <span className="font-normal text-xs text-[#FFF]">
                    Change
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[45px] max-w-[506px] mx-auto max-[767px]:mt-8 max-[576px]:mt-5">
            <input
              className="font-bold text-base text-[#FFF] bg-primaryColor rounded-[10px] px-[22px] py-3 h-[45px] w-full cursor-pointer"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBranding;
