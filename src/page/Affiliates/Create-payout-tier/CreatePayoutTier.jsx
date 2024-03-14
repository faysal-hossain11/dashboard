import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import Textarea from "../../../components/InputField/Textarea";

const CreatePayoutTier = () => {
  return (
    <div>
      <div className="max-w-[1056px] mx-auto 2xl:pl-[148px] xl:pt-[32px] xl:pr-[135px] 2xl:pb-[89px] xl:px-20 md:px-10 px-5 md:py-10 py-5  bg-[#FFF] rounded-[10px]">
        <div className="flex justify-center">
          <Headers text={{ heading: "Payout Tier Details" }}></Headers>
        </div>
        <form className="mt-[23px] max-[576px]:mt-4">
          <div className="flex flex-col sm:gap-6 gap-4">
            <InputFieldSmall
              label={"Payout Tier Name *"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              label={"Level *"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <Textarea
              label={"Description"}
              name={"Name"}
              bg={"#F6F6F6"}
              size={"base"}
              h={"107px"}
            />
          </div>
          <div className="xl:mt-[68px] md:mt-10 mt-5 text-center max-w-[264px] mx-auto">
            <AddButton text={"Submit"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePayoutTier;
