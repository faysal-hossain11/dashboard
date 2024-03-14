import AddButton from "../Button/AddButton";
import OutletButton from "../Button/OutletButton";
import SelectFiled from "../InputField/SelectFiled";

const CreateOfferTab2 = () => {
  return (
    <>
      <div className="tab-content-main">
        <div className="tab-content">
          <SelectFiled
            label={"Allowed Browses"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "All Browses", option: "All Browses" },
              { value: "All Browses", option: "All Browses" },
            ]}
          />
        </div>
        <div className="tab-content">
          <SelectFiled
            label={"Blocked Browses"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "None", option: "None" },
              { value: "None", option: "None" },
            ]}
          />
          <div className="flex gap-2.5 mt-5 items-center">
            <input
              className="h-[26px] w-[26px] text-tableColor"
              type="checkbox"
              name=""
              id="unsupported"
            />
            <label className="tab-checkbox-label" htmlFor="unsupported">
              Filiter traffic from unsupported browsers
            </label>
          </div>
        </div>
        <div className="tab-content">
          <SelectFiled
            label={"Allowed Device Brands"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "All", option: "All" },
              { value: "All", option: "All" },
            ]}
          />
          <div className="flex gap-2.5 mt-5 items-center">
            <input
              className="h-[26px] w-[26px] text-tableColor"
              type="checkbox"
              name=""
              id="unsupported"
            />
            <label className="tab-checkbox-label" htmlFor="unsupported">
              Filiter traffic from unsupported browsers
            </label>
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

export default CreateOfferTab2;
