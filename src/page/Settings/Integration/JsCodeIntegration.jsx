import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { SmallHeader } from "../../../components/Headers/MiddleHeader";
import Textarea from "../../../components/InputField/Textarea";

const JsCodeIntegration = () => {
  return (
    <div>
      <Headers text={{ heading: "JS Code Interaction" }}></Headers>
      <div className="mt-[30px] max-[576px]:mt-5 bg-white rounded-[10px] py-10 max-[576px]:py-5 px-3">
        <div className="max-w-[768px] mx-auto">
          <div className="flex justify-center">
            <SmallHeader heading={"Global JS COde Interaction"} />
          </div>
          <form>
            <div className="flex flex-col gap-[10px] mt-12 max-[767px]:mt-8 max-[576px]:mt-5">
              <h4 className="text-primaryColor font-medium text-base">
                Global Javascript Code
              </h4>
              <h5 className="text-[#6A6A6A] font-normal text-sm">
                Add google analytrics code, chat widget codes etc.
              </h5>
              <Textarea
                placeholder={"PlaceHolder Name"}
                name={"Name"}
                bg={"#F5F5F5"}
                h={"184px"}
              />
            </div>
            <div className="mt-[60px] max-[767]:mt-10 max-[576px]:mt-5 max-w-[506px] mx-auto">
              <AddButton text={"Update"} varient={"black"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JsCodeIntegration;
