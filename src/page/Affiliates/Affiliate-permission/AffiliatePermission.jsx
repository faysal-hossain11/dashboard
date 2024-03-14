import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { ToggleBar } from "../../../components/InputField/ToggleBar";

const AffiliatePermission = () => {
  return (
    <div>
      <div className="mb-[60px]">
        <Headers text={{ heading: 'Permissions' }}></Headers>
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Access Report"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Export Report"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Access Offers"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Make Offer Applications"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Access Smart Links"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Access Billing"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Update Account / Billing Information"} />
      </div>
      <div className="mb-[38px]">
        <ToggleBar heading={"Access API"} />
      </div>
      <div className="">
        <ToggleBar heading={"Manage postback URLs"} />
      </div>
      <div className="mt-[68px] max-w-[768px] m-auto">
        <AddButton text={"Update"} varient={"black"}  icon={"material-symbols:chevron-right"} />
      </div>
    
    </div>
  );
};

export default AffiliatePermission;
