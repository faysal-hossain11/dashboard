import AddButton from "../Button/AddButton";
import OutletButton from "../Button/OutletButton";
import SelectFiled from "../InputField/SelectFiled";

const CreateOfferTab1 = () => {
  return (
    <>
      <div className="tab-content-main">
        <div className="tab-content">
          <SelectFiled
            label={"Countries"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "All Countries", option: "All Countries" },
              { value: "All Countries", option: "All Countries" },
            ]}
          />
          <div
            className="flex gap-2.5 items-center"
            style={{ marginTop: "30px" }}
          >
            <input
              className="h-[26px] w-[26px] text-tableColor"
              type="checkbox"
              name=""
              id="countries"
            />
            <label className="tab-checkbox-label" htmlFor="countries">
              Exclude Selected Countries
            </label>
          </div>
        </div>
        <div className="tab-content">
          <SelectFiled
            label={"Target State / Region"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "All", option: "All" },
              { value: "All", option: "All" },
            ]}
          />
          <div
            className="flex gap-2.5 items-center"
            style={{ marginTop: "30px" }}
          >
            <input
              className="h-[26px] w-[26px] text-tableColor"
              type="checkbox"
              name=""
              id="countries"
            />
            <label className="tab-checkbox-label" htmlFor="countries">
              Filter traffic from unsupported regions (WARNING: Low accuracy)
            </label>
          </div>
        </div>
        <div className="tab-content">
          <SelectFiled
            label={"Target State / Region"}
            size={"base"}
            bg={"#F6F6F6"}
            name={"name"}
            select={[
              { value: "All", option: "All" },
              { value: "All", option: "All" },
            ]}
          />
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

export default CreateOfferTab1;
