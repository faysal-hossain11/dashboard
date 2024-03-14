import AddButton from "../Button/AddButton";
import OutletButton from "../Button/OutletButton";
import SelectFiled from "../InputField/SelectFiled";

const Tab5 = () => {
  return (
    <>
      <div className="third-tab">
        <div className="tab-content-change">
          <div className="tab-content-another">
            <SelectFiled
              label={"Allowed Traffic Sources)"}
              size={"base"}
              bg={"#F6F6F6"}
              name={"name"}
              select={[
                { value: "Any", option: "Any" },
                { value: "Any", option: "Any" },
              ]}
            />
          </div>
          <div className="tab-content-another">
            <SelectFiled
              label={"Not Allowed Traffic Sources)"}
              size={"base"}
              bg={"#F6F6F6"}
              name={"name"}
              select={[
                { value: "Any", option: "Any" },
                { value: "Any", option: "Any" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="enable-offer">
        <p className="enable-content mb-5">Enable Offer Events</p>
        <div className="max-w-[501px] mx-auto">
          <div className="flex max-[576px]:flex-col gap-[21px]">
            <AddButton text={"Disabled"} varient={"black"} />
            <OutletButton text={"Enabled"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab5;
