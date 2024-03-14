import AddButton from "../../../components/Button/AddButton";
import OutletButton from "../../../components/Button/OutletButton";
import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";

const AddCallback = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Headers text={{ heading: "Add Callback" }}></Headers>
      </div>
      <form className="2xl:px-[132px] xl:px-20 md:px-10 px-5 xl:py-[51px]  md:py-10 py-5 bg-white xl:mt-[75px] md:mt-10 mt-5 rounded-[10px]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 max-[767px]:gap-5">
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
            label={"Offer"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "Tewstoffer", option: "Tewstoffer" },
              { value: "Tewstoffer", option: "Tewstoffer" },
            ]}
          />
          <SelectFiled
            label={"Callback Type"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "Server Postback S2S", option: "Server Postback S2S" },
              { value: "Server Postback S2S", option: "Server Postback S2S" },
            ]}
          />
          <SelectFiled
            label={"Postback URL"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "aff_click_id", option: "aff_click_id" },
              { value: "aff_click_id", option: "aff_click_id" },
            ]}
          />
          <SelectFiled
            label={"Status"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "Active", option: "Active" },
              { value: "Inactive", option: "Inactive" },
            ]}
          />
        </div>
        <div className="max-w-[501px] mx-auto flex justify-center xl:mt-[60px] md:mt-10 mt-5 px-5">
          <div className="flex gap-[21px] max-[576px]:flex-col w-full">
            <OutletButton text={"Cancel"} />
            <AddButton text={"Create"} varient={"black"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCallback;
