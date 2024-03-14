import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { SmallHeader } from "../../../components/Headers/MiddleHeader";
import SelectFiled from "../../../components/InputField/SelectFiled";

const Fraudscore = () => {
  return (
    <div>
      <Headers text={{ heading: "Fraudscore API Key" }}></Headers>
      <div className="mt-[30px] max-[576px]:mt-5 bg-white rounded-[10px] py-10 max-[576px]:py-5 px-3">
        <div className="max-w-[768px] mx-auto">
          <div className="flex justify-center">
            <SmallHeader heading={"Track Conversion fraud with fraudscore"} />
          </div>
          <form>
            <SelectFiled
              label={"Fraudscore API Key"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "User Server Only", option: "User Server Only" },
                { value: "User Server Only", option: "User Server Only" },
              ]}
            />
            <div className="mt-[60px] max-[767]:mt-10 max-[576px]:mt-5 max-w-[506px] mx-auto">
              <AddButton text={"Update"} varient={"black"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fraudscore;
