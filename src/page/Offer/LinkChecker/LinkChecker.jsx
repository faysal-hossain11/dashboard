import cricleImg from "../../../assets/images/circle.png";
import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import InputBottom from "../../../components/InputField/InputBottom";
import OutlineSelect from "../../../components/InputField/OutlineSelect";

const LinkChecker = () => {
  return (
    <div>
      <div>
        <div className="mb-5">
          <Headers text={{ heading: "Link Checker" }}></Headers>
        </div>
        <p className=" text-center md:text-left px-[20px] md:px-0 font-primaryFont text-tartiaryColor text-[20px] font-medium mb-[40px]">
          A tool to test and confirm your promotional links work as expected.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-[30px] xl:mb-[103px] lg:mb-20 md:mb-10 mb-5 px-5 lg:px-0">
        <div className=" bg-white rounded-[14px] p-[40px] max-[576px]:p-5 flex gap-2 max-[576px]:flex-col justify-between items-center">
          <div>
            <div className="mb-[10px]">
              <Headers text={{ heading: "Usage" }}></Headers>
            </div>
            <p className=" text-primaryColor font-primaryFont text-[20px] font-medium mb-5">
              0/10%
            </p>
            <p className=" text-[16px] font-normal text-[#BDBDBD] font-primaryFont">
              <span className="text-[18px] text-[#FA4E4E]">-2%</span> than last
              month
            </p>
          </div>
          <div>
            <h1>need progress bar</h1>
          </div>
        </div>
        <div className=" bg-white rounded-[14px] p-[40px] max-[576px]:p-5 gap-2 flex max-[576px]:flex-col justify-between items-center">
          <div>
            <p className=" font-primaryFont text-[18px] font-normal text-tartiaryColor mb-[21px]">
              You have left
            </p>
            <Headers text={{ heading: "10 Credits" }}></Headers>
          </div>
          <div>
            <img src={cricleImg} alt="" />
          </div>
        </div>
        <div className="bg-white rounded-[14px] p-5">
          <div>
            <h3 className=" font-primaryFont mb-5 text-primaryColor font-medium text-[24px]">
              Add Credits
            </h3>
            <form action="">
              <select
                name="item"
                id="item"
                className="w-full outline-none mb-5 py-[14px] px-[16px] bg-[#F5F5F5] focus:outline-none rounded-[10px] text-[14px] text-[#6A6A6A] font-primaryFont font-normal"
              >
                <option value="">100 Credits Per Month ( $54 )</option>
                <option value="">Credits Per Month </option>
                <option value="">Credits Per Month ( $54 )</option>
                <option value="">100 Per Month </option>
                <option value="">Credits ( $54 )</option>
              </select>
              <AddButton text={"Buy Now"} varient={"green"} />
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] m-auto lg:p-[60px] md:p-10 p-5 rounded-[20px] bg-white mb-[80px]">
        <div>
          <InputBottom
            label={"Enter URL to Check"}
            size={"base"}
            placeholder={"EX:  https://lsdjfglasdjhflsdfljsdfjl.cvldhf"}
            name={"Name"}
            required={"required"}
          />
          <form action="">
            <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[24px] mb-5">
              <OutlineSelect
                name={"name"}
                select={[
                  { value: "Country", option: "Country" },
                  { value: "Credits Per Month", option: "Credits Per Month" },
                  { value: "100 Per Month", option: "100 Per Month" },
                  { value: "Credits", option: "Credits" },
                ]}
              />
              <OutlineSelect
                name={"name"}
                select={[
                  { value: "Device", option: "Device" },
                  { value: "Credits Per Month", option: "Credits Per Month" },
                  { value: "100 Per Month", option: "100 Per Month" },
                  { value: "Credits", option: "Credits" },
                ]}
              />
              <OutlineSelect
                name={"name"}
                select={[
                  { value: "Connection", option: "Connection" },
                  { value: "Credits Per Month", option: "Credits Per Month" },
                  { value: "100 Per Month", option: "100 Per Month" },
                  { value: "Credits", option: "Credits" },
                ]}
              />
              <OutlineSelect
                name={"name"}
                select={[
                  { value: "Mobile Carrier", option: "Mobile Carrier" },
                  { value: "Credits Per Month", option: "Credits Per Month" },
                  { value: "100 Per Month", option: "100 Per Month" },
                  { value: "Credits", option: "Credits" },
                ]}
              />
            </div>
            <AddButton text={"Check"} varient={"black"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LinkChecker;
