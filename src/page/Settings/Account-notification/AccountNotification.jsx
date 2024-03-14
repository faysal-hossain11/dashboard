import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { ToggleBar } from "../../../components/InputField/ToggleBar";

const AccountNotification = () => {
  return (
    <>
      <Headers text={{ heading: "Email Notification Settings" }}></Headers>
      <div className="lg:mt-20 md:mt-10 mt-5 flex flex-col md:gap-[30px] gap-5">
        <ToggleBar heading={"New Affiliate/Advertiser Sign up Emails"} />
        <ToggleBar heading={"Offer Cap Alerts"} />
        <ToggleBar heading={"Offer Status Change Alerts"} />
        <ToggleBar heading={"Offer Payout Update Notifications"} />
        <ToggleBar heading={"Offer Application Notifications"} />
        <ToggleBar heading={"Affiliate Network Status and Issue Alerts"} />
      </div>
      <div className="lg:mt-[60px] md:mt-10 mt-5 max-w-[768px] mx-auto">
        <AddButton text={"Update"} varient={"black"} />
      </div>
    </>
  );
};

export default AccountNotification;
