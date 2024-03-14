import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import SelectFiled from "../../../components/InputField/SelectFiled";

const AffiliateEdit = () => {
  return (
    <div>
      <div className="mb-[63px]">
        <Headers text={{ heading: 'Edit Affiliate #2' }}></Headers>
      </div>
      <div className="bg-white rounded-[10px] py-[41px] 2xl:px-[130px] xl:px-[40px] lg:px-[3px] md:px-[40px] px-[20px]">
          <div className="text-center mb-10">
            <MiddleHeader heading={"Company Details"} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-[60px]">
            <div>
              <SelectFiled label={"Company"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"City"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"Country"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"Region"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"Postal/Zip Code"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"Phone"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"IM Details"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
            <div>
              <SelectFiled label={"Enter IM ID"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
            </div>
          </div>
          <div className="text-center mb-10">
            <MiddleHeader heading={"Company Details"} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
              <div className="grid md:grid-cols-2 gap-6">
                <SelectFiled label={"Account Status"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
                <SelectFiled label={"Manually Approve"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
              </div>
              <div>
                <SelectFiled label={"Trafficback URL"} size={"base"} bg={"#F5F5F5"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
              </div>
          </div>
          <div className="max-w-[240px] m-auto">
            <AddButton text={"Update"} varient={"black"}  />
          </div>
      </div>
    </div>
  );
};

export default AffiliateEdit;
