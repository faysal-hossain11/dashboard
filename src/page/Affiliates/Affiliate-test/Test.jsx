import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";

const Test = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Headers text={{ heading: "Callback Manager Add Callback" }}></Headers>
      </div>
      <div
        id="callback-test"
        className="2xl:mt-[79px] 2xl:pt-[54px] 2xl:pl-[132px] 2xl:pr-[125px] 2xl:pb-[46px] xl:px-20 md:px-10 px-5 md:py-10 py-5 xl:mt-14 md:mt-10 mt-5 bg-white rounded-[10px]"
      >
        <form>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[18px] md:gap-y-10 gap-y-5">
            <SelectFiled
              label={"Offer"}
              size={"base"}
              bg={"#F6F6F6"}
              name={"name"}
              select={[
                {
                  value: "SweepstakesADay - Win $5,000 - One Field ID",
                  option: "SweepstakesADay - Win $5,000 - One Field ID",
                },
                {
                  value: "SweepstakesADay - Win $5,000 - One Field ID",
                  option: "SweepstakesADay - Win $5,000 - One Field ID",
                },
              ]}
            />
            <SelectFiled
              label={"Affiliate"}
              size={"base"}
              bg={"#F6F6F6"}
              name={"name"}
              select={[
                { value: "MOe", option: "MOe" },
                { value: "MOe", option: "MOe" },
              ]}
            />
            <SelectFiled
              label={"Test Postback URL"}
              size={"base"}
              bg={"#F6F6F6"}
              name={"name"}
              select={[
                { value: "aff_click_id", option: "aff_click_id" },
                { value: "aff_click_id", option: "aff_click_id" },
              ]}
            />
            <SelectFiled
              label={"Affiliate Tracking URL"}
              size={"base"}
              bg={"#F6F6F6"}
              name={"name"}
              select={[
                { value: "e.g http/dsygdusnhk", option: "e.g http/dsygdusnhk" },
                { value: "e.g http/dsygdusnhk", option: "e.g http/dsygdusnhk" },
              ]}
            />
          </div>
          <div className="flex justify-center lg:mt-[60px] md:mt-10 mt-5">
            <button className="px-[22px] py-3 bg-primaryColor rounded-[10px] w-[240px] h-[45px]">
              <span className="font-bold text-base text-[#FFF]">
                Start Test
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
