import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { ToggleBar } from "../../../components/InputField/ToggleBar";

const NotificationSetting = () => {
  return (
    <div>
      <div className="mb-[60px]">
        <Headers text={{ heading: ' Email Notification Settings' }}></Headers>
      </div>
      <div className="mb-[30px]">
        <ToggleBar heading={"New Affiliate / Advertiser Sign up emails"} />
      </div>
      <div className="mb-[30px]">
        <ToggleBar heading={"Offer cap alert"} />
      </div>
      <div className="mb-[30px]">
        <ToggleBar heading={"Offer status change alert"} />
      </div>
      <div className="mb-[30px]">
        <ToggleBar heading={"Offer payout update notification"} />
      </div>
      <div className="mb-[30px]">
        <ToggleBar heading={"offer application notification"} />
      </div>
      <div>
        <ToggleBar heading={"Affiliate network status & iss ue alert"} />
      </div>
      <div className="max-w-[768px] m-auto mt-[60px]">
        <AddButton text={"Update"} varient={"black"}  />
      </div>
    </div>
  );
};

export default NotificationSetting;
